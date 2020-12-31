# Lendulet muhely webpage
This project is a bootstrap-based html site for the organization 'Lendulet muhely'.
## Prerequisites
The latest LTS versions of Node, NPM and gulp-cli must be installed on your computer.
## Build
Installs all the required node dependencies:
```
npm install
```
Moves all the minified dependencies to the **working directory**, and also minifies and/or compiles the custom scss/js files:
```
gulp
```
Moves all the minified dependencies to the **target directory**, and
minifies and/or compile the custom scss/js files:
```
gulp --prod
```
The following script executes the ```gulp --prod``` command and it also uploads the content of the target directory to AWS S3. You have to set up your AWS CLI credentials before executing this script. After executing this script, the website will be instantly available on the internet.
```
./deploy.sh
```
