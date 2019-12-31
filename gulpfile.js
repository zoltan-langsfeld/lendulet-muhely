const {src, dest, watch, series, parallel} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const minify = require("gulp-minify");
const rename = require("gulp-rename");

const files = {
    scssPath: 'src/custom/scss/*.scss',
    customJsPath: 'src/custom/js/*.js',

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
        .pipe(dest('src/css'))
}

function minifyCustomJS() {
    return src(files.customJsPath)
        .pipe(minify({noSource: true}))
        .pipe(dest('src/js'))
}

function importExternalCssDependencies() {
    return src(files.cssDependenciesPath)
        .pipe(dest('src/css'))
}

function importExternalJsDependencies() {
    return src(files.jsDependenciesPath)
        .pipe(dest('src/js'))
}

function watchTask() {
    watch(files.scssPath, compileCustomSCSS);
    watch(files.customJsPath, minifyCustomJS);
}

exports.default = series(
    parallel(importExternalCssDependencies, compileCustomSCSS, minifyCustomJS, importExternalJsDependencies),
    watchTask
);
