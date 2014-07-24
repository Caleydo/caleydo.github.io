require "rubygems"
require "bundler/setup"
require "stringex"

## -- Misc Configs -- ##

public_dir      = "_site"    # compiled site directory
deploy_dir      = "_deploy"
server_port     = "4000"      # port for preview server eg. localhost:4000
target_repo     = "git@github.com:Caleydo/caleydo.github.io.git"
target_dev_repo = "git@github.com:Caleydo/caleydo-website-preview.git"

if (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  puts '## Set the codepage to 65001 for Windows machines'
  `chcp 65001`
end

#######################
# Working with Jekyll #
#######################

desc "Generate jekyll site"
task :generate do
  puts "## Generating Site with Jekyll"
  system "jekyll build"
end

desc "Watch the site and regenerate when it changes"
task :watch do
  puts "Starting to watch source with Jekyll"
  jekyllPid = Process.spawn({"OCTOPRESS_ENV"=>"preview"}, "jekyll build --watch")
  trap("INT") {
    [jekyllPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid].each { |pid| Process.wait(pid) }
end

desc "Clean out caches: .pygments-cache, .gist-cache, .sass-cache"
task :clean do
  rm_rf [".pygments-cache/**", ".gist-cache/**", ".sass-cache/**"]
end

##############
# check links  #
##############
desc "Check all external links"
task :check_links do
  require 'link_checker'
  puts "checking links"
  raise "## Link Checker errors" unless LinkChecker.new(
    :target => '_site',
#    :options => { :no_warnings => true }
  ).check_uris == 0
end


##############
# Patch config file  #
##############
desc "patch the config file with the right url setting"
task :patch_config do
  repo_url = selectRepo(target_repo, target_dev_repo)
  branch = (repo_url.match(/\/[\w-]+\.github\.(?:io|com)/).nil?) ? 'gh-pages' : 'master'
  project = (branch == 'gh-pages') ? repo_url.match(/\/([^\.]+)/)[1] : ''
  
  #patch the _config file with the right url
  jekyll_config = IO.read('_config.yml')
  target_url = blog_url(project)
  puts "patch config file to use url: #{target_url}"
  jekyll_config.sub!(/^url:.*$/, "url: \"#{target_url}\"")
  File.open('_config.yml', 'w') do |f|
    f.write jekyll_config
  end
end

desc "revert the config file to its original"
task :unpatch_config do
  puts "revert _config.yml"
  system "git checkout _config.yml"
end

##############
# Deploying  #
##############

desc "Default deploy task"
task :deploy do
  # Check if preview posts exist, which should not be published
  if File.exists?(".preview-mode")
    puts "## Found posts in preview mode, regenerating files ..."
    File.delete(".preview-mode")
    Rake::Task[:generate].execute
  end

  Rake::Task["deployImpl"].execute
end

desc "copy dot files for deployment"
task :copydot, :source, :dest do |t, args|
  FileList["#{args.source}/**/.*"].exclude("**/.", "**/..", "**/.DS_Store", "**/._*").each do |file|
    cp_r file, file.gsub(/#{args.source}/, "#{args.dest}") unless File.directory?(file)
  end
end

desc "deploy public directory to github pages"
task :deployImpl do
  repo_url = selectRepo(target_repo, target_dev_repo)
  branch = (repo_url.match(/\/[\w-]+\.github\.(?:io|com)/).nil?) ? 'gh-pages' : 'master'
  
  puts "## Deploying branch to Github Pages "
  puts "## Pulling any updates from Github Pages "
  
  puts "delete existing deployment dir"
  FileUtils.remove_dir("#{deploy_dir}",true)
  Dir.mkdir("#{deploy_dir}")
  
  #cd "#{deploy_dir}" do 
  #  system "git clone #{repo_url}"
  #end
  (Dir["#{deploy_dir}/*"]).each { |f| rm_rf(f) }
  
  puts "\n## Copying #{public_dir} to #{deploy_dir}"
  Rake::Task[:copydot].invoke(public_dir, deploy_dir)
  cp_r "#{public_dir}/.", deploy_dir
  
  cd "#{deploy_dir}" do
    #system "git add -A"
    message = "Site updated at #{Time.now.utc}"
    puts "\n## Committing: #{message}"
    #system "git commit -m \"#{message}\""
    puts "\n## Pushing generated #{deploy_dir} website"
    #system "git push origin #{branch}"
    puts "\n## Github Pages deploy complete"
  end
end


##############
# Publish Chain #
##############
desc "Generate website and deploy"
task :publish => [:patch_config, :generate, :check_links, :unpatch_config] do #, :deploy
end

########################################################

def ok_failed(condition)
  if (condition)
    puts "OK"
  else
    puts "FAILED"
  end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end

def selectRepo(master, develop) 
  localbranch = `git rev-parse --abbrev-ref HEAD`.strip
  puts "current branch: '#{localbranch}'"
  (localbranch == 'master') ? master : develop
end

def blog_url(project)
  url = if File.exists?('CNAME')
    "http://#{IO.read('CNAME').strip}"
  else
    "http://caleydo.github.io"
  end
  url += "/#{project}" unless project == ''
  url
end

desc "list tasks"
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end
