# Caleydo Website

[![Build Status](https://travis-ci.org/Caleydo/caleydo.github.io.svg?branch=master)](https://travis-ci.org/Caleydo/caleydo.github.io)

The new Caleydo website built with [Jekyll](https://jekyllrb.com),
[SASS](https://www.sass-lang.com),
[Bourbon](https://bourbon.io),
[Neat](https://neat.bourbon.io),
and [Bitters](https://bitters.bourbon.io).

## Emulating github-pages

The site is built by Github using Jekyll.
To preview locally, use the `github-pages` gem. Briefly:
```
# Ruby version must be >= 2.0.0.
ruby --version
# Install bundler for dependency management:
gem install bundler
# Fetch dependencies:
bundle install
# Start server:
bundle exec jekyll serve
# Get the most recent version of 'github-pages' gem:
bundle update
```

[More information](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-2-install-jekyll-using-bundler)

## Jekyll Plugins

The only supported plugins are those that come with the [github-pages gem](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/).

## Liquid Syntax

https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
