## About repository

This repository contains three branches

branch | description 
---|---
html | Only html template

## Example site

Not created yet

## How start

Git clone 

    git clone https://github.com/webzwezda/viewofthepast.git

### Install modules gulp

Use ubuntu 19.04 i had a problem with nodejs, fix it install [nodejs v11](https://github.com/nodesource/distributions) and delete [.node-gyp](https://codeforgeek.com/make-failed-with-exit-code-2/)

    sudo npm i -g npm

But first install 

* Nodejs
* NPM
* Gulp

All modules ***Gulp***

1. browser-sync
1. gulp
1. gulp-concat
1. gulp-file-include
1. gulp-if
1. gulp-minify-css
1. gulp-sass 
1. gulp-sourcemaps 
1. gulp-uglifyjs    

Need console spell

    sudo npm i -D gulp gulp-if gulp-sass gulp-file-include gulp-sourcemaps gulp-concat browser-sync gulp-uglifyjs

## Commands for run Gulp

### Develop mode 

Just run *gulp*

    gulp

Well run `gulp default` create a file **main.css** and put in *sourceMap*

### Product mode

It's command not put *sourceMap* in **main.css** 

    NODE_ENV=prod gulp

Command only generate *main.css*

    NODE_ENV=prod gulp sass
