# Lendulet Muhely's website
This project is a bootstrap-based HTML site for the organization Lendulet Muhely.
## Prerequisites
The latest LTS versions of Node, NPM, and `gulp-cli` must be installed on your computer.
## Build
1. Run the `npm install` command to install all the required dependencies.
2. Run the `gulp` command to move all the minified dependencies into the **working directory** and to minify and compile the custom scss/js files.
3. Run the `gulp --prod` command to move all the minified dependencies into the **target directory**, and minify and compile the custom scss/js files.
## Deploy
1. Set up your AWS CLI credentials.
2. Run `./deploy.sh`. It builds the website and uploads the artifacts to AWS S3. It also invalidates the CloudFront cache so that the changes will appear in users' browsers immediately.