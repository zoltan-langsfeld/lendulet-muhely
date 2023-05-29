# Lendulet muhely webpage
This project is a bootstrap-based HTML site for the organization Lendulet muhely.
## Prerequisites
The latest LTS versions of Node, NPM, and `gulp-cli` must be installed on your computer.
## Build
* Run the `npm install` command to install all the required dependencies.
* Run the `gulp` command to move all the minified dependencies into the **working directory** and to minify and compile the custom scss/js files.
* Run the `gulp --prod` command to move all the minified dependencies into the **target directory**, and
  minify and compile the custom scss/js files.
## Deploy
The following script executes the ```gulp --prod``` command, and it also uploads the content of the target directory into AWS S3. You have to set up your AWS CLI credentials before running this script. After running this script, the website will be instantly available online.
```
./deploy.sh
```