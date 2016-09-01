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

    repo_data = Hash[readmes.map { |repo, readme|
        badge_match = readme.match(/!\[([^\]]*)\]/)
        blurb_match = readme.match(/===\s+(.*)/)
        [
            repo,
            {
                badge: badge_match ? badge_match[1] : nil,
                blurb: blurb_match ? blurb_match[1] : nil
            }
        ]
    }]

    types = ['Application', 'Client Plugin', 'Server Plugin', 'Bundle'].map { |suffix|
        'Caleydo Web ' + suffix
    }

    Hash[types.map { |type|
        [type, repo_data.select { |repo, data| data[:badge] == type}]
    }]
end

# repos = repos_by_type
repos = {"Caleydo Web Application"=>{"domino_js"=>{:badge=>"Caleydo Web Application", :blurb=>"Caleydo Domino is a novel multiform visualization technique for effectively representing subsets and the relationships between them. By providing comprehensive tools to arrange, combine, and extract subsets, Domino allows users to create both common visualization techniques and advanced visualizations tailored to specific use cases."}, "particles"=>{:badge=>"Caleydo Web Application", :blurb=>"This is application visualizes the distribution of items as particles using [PhysicsJS](http://wellcaffeinated.net/PhysicsJS/). The underlying particle system ensures a smooth and interactive visualization."}, "stratomex_js"=>{:badge=>"Caleydo Web Application", :blurb=>"StratomeX.js is a port for Caleydo Web using the Caleydo CLUE framework for provenance tracking and story telling."}, "pathfinder"=>{:badge=>"Caleydo Web Application", :blurb=>"Pathfinder is a tool for the visual exploration of paths in large graphs."}}, "Caleydo Web Client Plugin"=>{"caleydo_vis_proteinviewer"=>{:badge=>"Caleydo Web Client Plugin", :blurb=>"A visualization plugin for molecules using [Bio-PV](https://github.com/biasmv/pv)."}}, "Caleydo Web Server Plugin"=>{"pathfinder_ccle"=>{:badge=>"Caleydo Web Server Plugin", :blurb=>"Pathfinder python server plugin for providing [CCLE data](https://portals.broadinstitute.org/ccle/)."}, "pathfinder_graph"=>{:badge=>"Caleydo Web Server Plugin", :blurb=>"Pathfinder python server plugin for communicating with [Neo4j](https://neo4j.com/)."}}, "Caleydo Web Bundle"=>{}}

puts repos