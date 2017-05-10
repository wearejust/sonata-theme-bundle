// ==================================================
// Requirements
// ==================================================

var autoprefixer = require('autoprefixer'),
    clean = require('gulp-clean'),
    gulp = require('gulp'),
    gulpWebpack = require('gulp-webpack'),
    path = require('path'),
    postcss = require('gulp-postcss'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack');



// ==================================================
// Paths
// ==================================================

var dist_path = 'resources/public/',
    sass_path = 'resources/public/scss/',
    css_path  = 'resources/public/css/',
    css_images_path = 'resources/',
    js_path = 'resources/public/javascript/',
    js_build_path = 'resources/public/javascript/';



// ==================================================
// Tasks
// ==================================================

gulp.task('default', ['stylesheet', 'javascript'], function() {
    gulp.start('revision');
});

gulp.task('watch', function () {
    gulp.watch(sass_path + '**/*.scss', ['stylesheet']);
    gulp.watch(js_path + '**/*.js', ['javascript']);
});

gulp.task('clean', function () {
    return gulp.src([dist_path + '**/*.css', dist_path + '**/*.js', dist_path + '**/*.map'] , {read: false})
        .pipe(clean({
            force:true
        }));
});

gulp.task('revision', ['clean'], function () {
    return gulp.src([css_path + '*.css', js_build_path + '*.js'], {base: 'public'})
        .pipe(gulp.dest(dist_path))
        .pipe(rev())
        .pipe(gulp.dest(dist_path))
        .pipe(rev.manifest())
        .pipe(gulp.dest(dist_path));
});



// ==================================================
// Stylesheet
// ==================================================

gulp.task('stylesheet', function(callback) {
    gulp.src(sass_path + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            imagePath: css_images_path
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({
            browsers: ['last 4 versions']
        })]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(css_path))
        .on('end', callback);
});



// ==================================================
// Javascript
// ==================================================

gulp.task('javascript', function(callback) {
    gulp.src(js_path + '**/*.js')
        .pipe(gulpWebpack({
            cache: true,
            context: path.resolve(__dirname, './' + js_path),
            entry: {
                app: './app.js'
            },
            output: {
                path: path.resolve(__dirname, './' + js_build_path),
                filename: '[name].bundle.js'
            },
            resolve: {
                modules: [
                    path.resolve('./node_modules')
                ]
            },
            module: {
                loaders: [
                    {
                        test: /.jsx?$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            presets: ['es2015-ie']
                        }
                    }
                ]
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    compress: true,
                    sourceMap: true
                })
            ],
            devtool: 'source-map'
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .pipe(gulp.dest(js_build_path))
        .on('end', callback);
});