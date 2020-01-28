# Lendulet muhely webpage
This project is a bootstrap based html site for the organization 'Lendulet muhely'.
## Prerequisites
You'll need the latest LTS versions of Node, NPM and gulp-cli.
## Build
This will download all the required dependencies:
```
npm install
```
This will move all the minified dependencies to the **working directory**, and
it'll also minify and/or compile the custom scss/js files:
```
gulp
```
This will move all the minified dependencies to the **target directory**, and
it'll also minify and/or compile the custom scss/js files:
```
gulp --prod
```
The following script will execute the ```gulp --prod``` command and it'll also upload the content of the target directory to AWS S3. You have to set up your AWS CLI credentials before executing this script. After executing this script, the website will be instantly available on the internet.
```
./deploy.sh
```
