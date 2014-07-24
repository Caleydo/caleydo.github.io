### Caleydo Website

The new Caleydo website built with [Jekyll](http://jekyllrb.com), [SASS](http://www.sass-lang.com), [Bourbon](http://bourbon.io), [Neat](http://neat.bourbon.io), and [Bitters](http://bitters.bourbon.io).

#### Ubuntu Prerequisites

```ShellSession
$ sudo apt-get install ruby-dev
```

#### Setup

Requires Jekyll 2.1.0 or later.

```ShellSession
$ gem install jekyll
```

#### Generate and/or Serve Site

```ShellSession
$ jekyll serve --watch
```

#### View Site

```ShellSession
$ open http://0.0.0.0:4000/
```

### Updating Bourbon Dependencies

To update the dependencies on Bourbon, Neat or Bitters additional gems are required.

```ShellSession
$ gem install bourbon
$ gem install neat
$ gem install bitters
```
Depending on your system your might have to run those as superuser using ```sudo```.

### Jekyll Plugins

- YouTube: https://gist.github.com/joelverhagen/1805814

### Liquid Syntax

https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

### Windows Installation Instructions

http://jekyll-windows.juthilo.com/1-ruby-and-devkit/