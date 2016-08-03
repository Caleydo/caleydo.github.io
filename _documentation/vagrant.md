---
layout: documentation
title:  Setting up Vagrant
permalink: /documentation/vagrant/
---

Note: Setting up a dev environment requires a working installation of Git!

- *Windows Only*: Install [Git](http://git-scm.com/download/win)

- Install [Vagrant](http://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/)

  Vagrant is used for creating a controlled environment using a virtual machine provided by VirtualBox.

- Clone this repository

{% highlight bash  %}
 git clone https://github.com/Caleydo/caleydo_web_container.git
{% endhighlight %}

- Launch a (bash) shell
  
  *Windows Only*: Ensure that you start the `Git Bash` with administrative rights

- Switch to the new directory

{% highlight bash  %}
 cd caleydo_web_container
{% endhighlight %}

- Let Vagrant create the environment for you

{% highlight bash  %}
 # start vagrant
 vagrant up
{% endhighlight %}

- Connect to VM

{% highlight bash  %}
 # connect to vm
 vagrant ssh
{% endhighlight %}

- Navigate to caleydo directory

{% highlight bash  %}
 cd /vagrant
{% endhighlight %}

The `/vagrant` folder is shared with your cloned repository. So, all changes are reflected in your local filesystem.

- Exit and stop the virtual machine

{% highlight bash  %}
 exit
 vagrant halt
{% endhighlight %}

