---
layout: documentation
title:  Docker
permalink: /documentation/docker
---

[Docker](http://docker.com/) can be used to bundle Caleydo Web packages into containers. 

## Build Image

The binary build packages already contain a Docker file that is ready to build a container out of it. 

1. Download and unpack the desired binary package, e.g., `caleydo_gapminder.tar.gz` 
2. Navigate to the directory `cd caleydo_gapminder`
3. Execute `bash docker build -t caleydo/gapminder .`

This will build a docker image out of the binary package. 

## Run Container

To launch the container, use common docker commands: 

`docker run -d -p 9000:9000 --name gapminder caleydo/gapminder`

or 

    docker run -d -P --name gapminder caleydo/gapminder
    docker port gapminder
    docker stop gapminder
