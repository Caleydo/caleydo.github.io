### Caleydo Website

The new Caleydo website built with [Jekyll](http://jekyllrb.com), [SASS](http://www.sass-lang.com), [Bourbon](http://bourbon.io), [Neat](http://neat.bourbon.io), and [Bitters](http://bitters.bourbon.io).

#### Emulating github-pages

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

### Jekyll Plugins

The only supported plugins are those that come with the [github-pages gem](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/).

### Liquid Syntax

https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

### Windows Installation Instructions

http://jekyll-windows.juthilo.com/1-ruby-and-devkit/

### Writing interactive documentation 

When contributing documentation, put each individual page in the `_documentation` collection as a markdown file.
 
If your documentation contains code, you should write the code in a separate file, which you put into a sub-folder of the `_documentation` folder. By convention, this folder should have the same name as your markdown file. 

To include code on the page, you can use the following jekyll code: 

```
{% include code.html file="path_to_file.html" foldAt="2,14" js="false" preview="true" %}
```

Here `code.html' refers to the file to include (don't change that). This renders a code-editor with a box displaying the content of file. Optionally it also renders a preview of the file.

The parameters are: 

 * `file` the path to the file to be displayed / executed.
 * `foldAt` indicates at which positions the code should be folded. This should be given in a comma-separated list. Notice that the indices start at 0, while the line numbering in the code editor starts at 1. Only use line numbers where there is a folding indicator. 
 * `js` - true if the code to render is javascript only, false if html. defaults to false.
 * `renderPreview` - set to true if you want to render a preview of your html below the code editor. Defaults to true.

So, if you want to include and render a html file, just use this: 

```
{% include code.html file="path_to_file.html"%}
```
