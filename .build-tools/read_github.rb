require 'JSON'
require 'open-uri'

def repos_by_type
    repos = (1..4).map{ |page| # I am more concerned about infinite loops than about generality.
        sleep(0.5) # Be nice
        url = "https://api.github.com/orgs/Caleydo/repos?page=#{page}"
        JSON.parse(
            open(url).read
        ).map { |repo| repo['name'] }
    }.flatten

    readmes = Hash[repos.map { |repo|
        [
            repo,
            begin
                sleep(0.5) # Be nice
                open("https://raw.githubusercontent.com/Caleydo/#{repo}/master/README.md").read
            rescue
                'error: ' + repo
            end
        ]
    }]

    badges = Hash[readmes.map { |repo, readme|
        match = readme.match(/!\[([^\]]*)\]/)
        [
            repo,
            match ? match[1] : nil
        ]
    }]

    types = ['Application', 'Client Plugin', 'Server Plugin', 'Bundle'].map { |suffix|
        'Caleydo Web ' + suffix
    }

    Hash[types.map { |type|
        [type, badges.select { |repo, badge| badge == type}.keys]
    }]
end

puts repos_by_type