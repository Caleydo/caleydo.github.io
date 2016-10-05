require 'json'
require 'open-uri'
require 'yaml'
require 'singleton'

class Refresher
  include Singleton

  ## Get data repo info

  def repos_from_github
    (1..4).map{ |page| # I am more concerned about infinite loops than about generality.
      url = "https://api.github.com/orgs/Caleydo/repos?page=#{page}"
      warn "Fetching #{url}"
      sleep(1) # Be nice
      JSON.parse(
        open(url).read
      )
    }.flatten
    #[{
    #  'name' => 'lineup.js',
    #  'html_url' => 'https://github.com/Caleydo/lineup.js',
    #  'created_at' => '2013-07-09T13:17:21Z',
    #  'updated_at' => '2016-09-27T09:14:18Z',
    #  'pushed_at' => '2016-10-05T15:25:22Z'
    #}]
  end

  def repos_from_local
    YAML.load_file( File.dirname(__FILE__) + '/repos.yml' )
  end

  ## Utils

  def by_name(list)
    Hash[
      list.map { |i| [i['name'], i] }
    ]
  end

  def readme(repo, branch)
    url = "https://raw.githubusercontent.com/Caleydo/#{repo}/#{branch}/README.md"
    warn "Fetching #{url}"
    # "Mock ![Caleydo Web Client Plugin](https://url) ===== This is the blurb\nThis is not the blurb"
    sleep(1) # Be nice
    open(url).read
  rescue => e
    warn "#{url}: #{e}"
    'http error'
  end

  def badge_blurb(repo, branch)
    readme = readme(repo, branch)
    badge_match = readme.match(/!\[([^\]]*)\]/) # Text of first image on page
    blurb_match = readme.match(/===\s+(.*)/)
    {
      badge: badge_match ? badge_match[1] : nil,
      blurb: blurb_match ? blurb_match[1] : nil
    }
  end

  ## Output

  def merge
    github_by_name = by_name(repos_from_github)
    local_by_name = by_name(repos_from_local)

    Hash[github_by_name.sort].map do |name,record|
      github_modified_at = [
        record['created_at'],
        record['updated_at'],
        record['pushed_at']
      ].max
      if !local_by_name[name] ||
         !local_by_name[name]['modified_at'] ||
         (local_by_name[name]['modified_at'] < github_modified_at)
        warn "Updating #{name}"
        branch = record['default_branch']
        bb = badge_blurb(name, branch)
        {
          'name' => name,
          'description' => bb[:blurb],
          'html_url' => record['html_url'],
          'category' => bb[:badge],
            # Unrecognized categories are preserved, but ignored by list.md
          'modified_at' => github_modified_at
        }
      else
        warn "Keep existing #{name}"
        local_by_name[name]
      end
    end
  end

  def repos_yml
    merge.to_yaml
  end
end

if __FILE__ == $0
  puts Refresher.instance.repos_yml
end
