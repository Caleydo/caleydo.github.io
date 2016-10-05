require 'json'
require 'open-uri'
require 'yaml'
require 'singleton'

class Refresher
  include Singleton

  ## Get data repo info

  def repos_from_github
    #  (1..4).map{ |page| # I am more concerned about infinite loops than about generality.
    #    sleep(0.5) # Be nice
    #    url = "https://api.github.com/orgs/Caleydo/repos?page=#{page}"
    #    JSON.parse(
    #        open(url).read
    #    )
    #  }.flatten
    [{
      'name' => 'lineup.js',
      'html_url' => 'https://github.com/Caleydo/lineup.js',
      'created_at' => '2013-07-09T13:17:21Z',
      'updated_at' => '2016-09-27T09:14:18Z',
      'pushed_at' => '2016-10-05T15:25:22Z'
    }]
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

  def readme(repo)
    # open("https://raw.githubusercontent.com/Caleydo/#{repo}/master/README.md").read
    <<END
Caleydo Web Core ![Caleydo Web Clien Plugin](https://img.shields.io/badge/Caleydo%20Web-Client%20Plugin-F47D20.svg)
=====================

Caleydo Web is a framework for developing web-based visualization applications. This is the core repository, but you will find the code distributed among [many repositories](http://caleydo.org/documentation/list_of_plugins).

If you want to learn how to use Caleydo Web, check out the [documentation](http://caleydo.org/documentation).

Installation
------------
END
  end

  def badge_blurb(repo)
    readme = readme(repo)
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

    github_by_name.map do |name,record|
      puts record
      github_modified_at = [
        record['created_at'],
        record['updated_at'],
        record['pushed_at']
      ].max
      if !local_by_name[name] ||
         !local_by_name[name]['modified_at'] ||
         !local_by_name[name]['modified_at'] < github_modified_at
        bb = badge_blurb(name)
        {
          'name' => name,
          'description' => bb[:blurb],
          'html_url' => record['html_url'],
          'category' => bb[:badge],
          'modified_at' => github_modified_at
        }
      else
        local_by_name[name]
      end
    end
  end

  def clean
    types = ['Application', 'Client Plugin', 'Server Plugin', 'Bundle'].map { |suffix|
      'Caleydo Web ' + suffix
    }
    merge
      .select { |x| x } # Remove nulls
      .select { |x| types.include?(x['category']) }
  end

  def repos_yml
    clean.to_yaml
  end
end

if __FILE__ == $0
  puts Refresher.instance.repos_yml
end
