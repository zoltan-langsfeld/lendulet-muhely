# Lendulet muhely webpage
This project is a bootstrap based html site for the organization 'Lendulet muhely'.
## Prerequisites
You'll need the latest LTS versions of Node, NPM and gulp-cli.
## Build
This will download all the required dependencies:
```
npm install
```
This will move all the minified dependencies to the working directory, and it'll also minify and/or compile the custom scss/js files:
```
gulp
```
The following script will compile, minify and move all files to the target directory, and
it'll also upload them to AWS S3. You have to set up the AWS CLI credentials beforehand.
```
./deploy.sh
```
