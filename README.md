# Caleydo Website

[![Build Status](https://travis-ci.org/Caleydo/caleydo.github.io.svg?branch=master)](https://travis-ci.org/Caleydo/caleydo.github.io)

The new Caleydo website built with [Jekyll](http://jekyllrb.com), [SASS](http://www.sass-lang.com), [Bourbon](http://bourbon.io), [Neat](http://neat.bourbon.io), and [Bitters](http://bitters.bourbon.io).

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

## Writing interactive documentation 

When contributing documentation, put each individual page in the `_documentation` collection as a markdown file.
 
If your documentation contains code, you should write the code in a separate file, which you put into a sub-folder of the `_documentation` folder. By convention, this folder should have the same name as your markdown file. 

To include code on the page, you can use the following jekyll code: 

    ```javascript
    {% include_relative path/to/your/code.js %}
    ```

## Testing the tutorial examples

The tutorial examples are tested by Travis. If there are failures...:
1. Make sure the output in the iframes looks right.
2. If that doesn't help, run the qunit.html locally.
3. If that doesn't help, run selenium to run qunit locally.

(Conversely, if the iframe doesn't look right, but tests are passing,
strengthen the tests.)
