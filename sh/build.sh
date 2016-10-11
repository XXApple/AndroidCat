#!/bin/sh

cd `dirname $0`

echo '>> Prepare express'
cd ..
npm install

#######################

echo '>> Prepare app'
cd app
npm install
bower install

echo '>> Start gulp defalut task'
gulp build


echo '>> Build shell complate'