const {src, dest, watch, series, parallel} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const minify = require("gulp-minify");
const rename = require("gulp-rename");
const argv = require('yargs').argv;

const files = {
    scssPath: 'src/scss/*.scss',
    customJsPath: 'src/js_custom/*.js',

    cssDependenciesPath: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
    jsDependenciesPath: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'],

    workingCssPath: 'src/css',
    workingJsPath: 'src/js',

    targetPath: 'target',
    targetCssPath: 'target/css',
    targetJsPath: 'target/js',
    targetAssetsPath: 'target/assets',

    htmlSourcePath: 'src/*.html',
    assetsSourcePath: 'src/assets/**'
};

// CSS tasks

function compileCustomSCSSToWorkingDir() {
    return compileCustomSCSS().pipe(dest(files.workingCssPath))
}

function compileCustomSCSSToTargetDir() {
    return compileCustomSCSS().pipe(dest(files.targetCssPath))
}

function compileCustomSCSS() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(rename('style.min.css'))
}

function moveCssDependenciesToWorkingDir() {
    return src(files.cssDependenciesPath)
        .pipe(dest(files.workingCssPath))
}

function moveCssDependenciesToTargetDir() {
    return src(files.cssDependenciesPath)
        .pipe(dest(files.targetCssPath))
}

// JS tasks

function minifyCustomJsToWorkingDir() {
    return minifyCustomJS()
        .pipe(dest(files.workingJsPath));
}

function minifyCustomJsToTargetDir() {
    return minifyCustomJS()
        .pipe(dest(files.targetJsPath));
}

function minifyCustomJS() {
    return src(files.customJsPath)
        .pipe(minify({noSource: true}))

}

function moveJsDependenciesToWorkingDir() {
    return src(files.jsDependenciesPath)
        .pipe(dest(files.workingJsPath))
}

function moveJsDependenciesToTargetDir() {
    return src(files.jsDependenciesPath)
        .pipe(dest(files.targetJsPath))
}

// HTML and assets tasks

function moveHTMLFilesToTargetDir() {
    return src(files.htmlSourcePath)
        .pipe(dest(files.targetPath))
}

function moveAssetsToTargetDir() {
    return src(files.assetsSourcePath)
        .pipe(dest(files.targetAssetsPath))
}

// Watch task

function watchTask() {
    watch(files.scssPath, compileCustomSCSSToWorkingDir);
    watch(files.customJsPath, minifyCustomJS);
}

if (argv.prod === undefined) {
  exports.default = parallel(
    moveCssDependenciesToWorkingDir,
    moveJsDependenciesToWorkingDir,
    compileCustomSCSSToWorkingDir,
    minifyCustomJsToWorkingDir,

    watchTask
  )
} else {
  exports.default = parallel(
    moveCssDependenciesToTargetDir,
    moveJsDependenciesToTargetDir,
    compileCustomSCSSToTargetDir,
    minifyCustomJsToTargetDir,

    moveHTMLFilesToTargetDir,
    moveAssetsToTargetDir
  )
}
