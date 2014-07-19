### Caleydo Website

The new Caleydo website built with [Jekyll], [SASS](http://www.sass-lang.com), [Bourbon](http://bourbon.io), [Neat](http://neat.bourbon.io), and [Bitters](http://bitters.bourbon.io).

#### Setup

```ShellSession
$ gem install jekyll
```

To update the dependencies on Bourbon, Neat or Bitters additional gems are required.

```ShellSession
$ gem install bourbon
$ gem install neat
$ gem install bitters
```
Depending on your system your might have to run those as superuser using ```sudo```.


Depending on your system your might have to run those as superuser using ```sudo```.


#### Generate and/or Serve Site

```ShellSession
# terminal 1
$ jekyll serve --watch

# terminal 2
$ sass _sass:css --watch
```

#### View Site

```ShellSession
$ open http://0.0.0.0:4000/
```

