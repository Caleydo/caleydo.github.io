#!/usr/bin/env bash

if [[ $TRAVIS_EVENT_TYPE == 'cron' ]]; then
  bundle exec ruby .build-tools/read_github.rb > _data/repos-expected.yml
  # YAML serialization is not consistent between platforms.
  # We strip single and double quotes before diff, but I am sure there is a better way.
  diff <(sed 's/['"'"'"]//g' _data/repos.yml) \
       <(sed 's/['"'"'"]//g' _data/repos-expected.yml) \
    || ( echo 'Regenerate repos.yml' && exit 1 )
fi