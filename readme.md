# Lendulet muhely webpage
This project is a bootstrap-based html site for the organization 'Lendulet muhely'.
## Prerequisites
The latest LTS versions of Node, NPM and gulp-cli must be installed on your computer.
## Build
To install all the required dependencies, run:
```
npm install
```
To move all the minified dependencies to the **working directory**, and to minify and/or compie the custom scss/js files, run:
```
gulp
```
To move all the minified dependencies to the **target directory**, and
minify and/or compile the custom scss/js files, run:
```
gulp --prod
```
The following script executes the ```gulp --prod``` command and it also uploads the content of the target directory to AWS S3. You have to set up your AWS CLI credentials before running this script. After running this script, the website will be instantly available on the internet.
```
./deploy.sh
```
