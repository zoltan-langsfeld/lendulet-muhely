const {src, dest, watch, series, parallel} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const minify = require("gulp-minify");
const rename = require("gulp-rename");

const files = {
    scssPath: 'src/scss/*.scss',
    customJsPath: 'src/js_custom/*.js',

    cssDependenciesPath: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
    jsDependenciesPath: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'],

    cssPath: 'src/css',
    jsPath: 'src/js'
};

function compileCustomSCSS() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(rename('style.min.css'))
        .pipe(dest(files.cssPath))
}

function minifyCustomJS() {
    return src(files.customJsPath)
        .pipe(minify({noSource: true}))
        .pipe(dest(files.jsPath))
}

function importExternalCssDependencies() {
    return src(files.cssDependenciesPath)
        .pipe(dest(files.cssPath))
}

function importExternalJsDependencies() {
    return src(files.jsDependenciesPath)
        .pipe(dest(files.jsPath))
}

function watchTask() {
    watch(files.scssPath, compileCustomSCSS);
    watch(files.customJsPath, minifyCustomJS);
}

exports.default = series(
    parallel(importExternalCssDependencies, compileCustomSCSS, minifyCustomJS, importExternalJsDependencies),
    watchTask
);
