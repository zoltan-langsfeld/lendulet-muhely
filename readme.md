# Lendulet muhely webpage
This project is a bootstrap based html site for the organization 'Lendulet muhely'.
## Prerequisites
You'll need the latest LTS versions of Node, NPM and gulp-cli.
## Build
This will download all the required dependencies:
```
npm install
```
This will move all the minified dependencies to the working and target
directory, and it'll also minify and/or compile the custom scss/js files:
```
gulp
``` 
You can directly host the the target directory on a server. Please note that
if you want to re-export the project to the target directory, you have to re-run
gulp, as the watch task only compiles the changed custom scss/js to the working 
directory

