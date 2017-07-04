var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var del = require('del');
//var sass = require('gulp-sass');
//var less = require('gulp-less');
var runSequence = require('run-sequence');

gulp.task('clean',function(){
	del(['src/main/resources/static/js/*','src/main/resources/static/css/*','src/main/resources/static/image/*']);

});


//gulp.task('sass',function(){
//	return gulp.src('src/css/**/*.scss')
//	.pipe(sass())
//	.pipe(gulp.dest('./dist/css'))
//});


//gulp.task('less',function(){
//	return gulp.src('src/css/**/*.less')
//	.pipe(less())
//	.pipe(gulp.dest('./dist/css'))
//}) */

gulp.task('transpile',function(){
	return gulp.src('./src/main/js/index.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('./src/main/resources/static/js'));
})

gulp.task('build',function(callback){
	runSequence('clean',['transpile'],callback)
})
