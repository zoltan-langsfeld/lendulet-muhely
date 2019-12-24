const {src, dest, watch, series, parallel} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const files = {
    scssPath: 'src/custom/scss/*.scss',

    cssDependenciesPath: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
    jsDependenciesPath: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js']

};

function compileCustomSCSS() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('src/css'))
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
    watch(files.scssPath,
        compileCustomSCSS
    );
}

exports.default = series(
    parallel(importExternalCssDependencies, compileCustomSCSS, importExternalJsDependencies),
    watchTask
);
