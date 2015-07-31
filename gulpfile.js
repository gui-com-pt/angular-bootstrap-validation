var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    watch = require('gulp-watch');

var paths = {
    dependencies: [ ],
    appModules: [
        './src/*.mdl.js',
        './src/**/*.js',
        './src/**/**/*.js'
    ]
};
gulp.task('scripts', function(){

    gulp.src(paths.appModules)
        .pipe(concat('angular-bootstrap-validation.js'))
        .pipe(gulp.dest('./dist'));

    gulp.src(['./bower_components/angular/angular.js', './bower_components/angular-i18n/angular-locale_pt.js'])
      .pipe(concat('angular.js'))
      .pipe(gulp.dest('./public/dist'));

    gulp.src([
      './bower_components/jquery/dist/jquery.js'
      ])
        .pipe(concat('jquery.js'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('uglify', function() {
  gulp.src(paths.appModules)
    .pipe(uglify('angular-bootstrap-validation.min.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('dependencies', function(){
   gulp.src(paths.dependencies)
       .pipe(concat('dependencies.js'))
       .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function(){
    gulp.watch(paths.appModules, ['scripts']);
});

gulp.task('default', ['scripts', 'dependencies', 'uglify']);
