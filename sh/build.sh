#!/bin/sh

cd `dirname $0`

echo "\033[34m ======== Prepare express ======== \033[0m"
cd ..
npm install

#######################

echo "\033[34m ======== Prepare app ======== \033[0m"
cd app
npm install
bower install

echo "\033[34m ======== Start gulp defalut task ======== \033[0m"
gulp build

#######################

cd `dirname $0`

echo "\033[34m ======== Prepare dashboard ======== \033[0m"
cd dashboard
npm install

gem install sass

gulp build

echo "\033[34m ======== Build shell complate ======== \033[0m"