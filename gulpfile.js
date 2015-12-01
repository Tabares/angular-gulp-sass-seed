var gulp = require('gulp'),
	util = require('gulp-util'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	flatten = require('gulp-flatten');;

gulp.task('html', function() {
	gulp.src('src/**/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/**/*.html!index.html')
		.pipe(gulp.dest('dist/view'));
	util.log(util.colors.yellow('html processed'));
});

gulp.task('js', function() {
	gulp.src([
		'src/**/*.module.js',
		'src/**/*.factory.js',
		'src/**/*.service.js',
		'src/**/*.controller.js',
		'src/**/*.directive.js'
	])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist'));
	util.log(util.colors.yellow('javascript processed'));
});

gulp.task('css', function() {
	gulp.src('src/**/app.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(flatten())
		.pipe(gulp.dest('dist'));
	util.log(util.colors.yellow('css processed'));
});

gulp.task('default', ['html', 'js', 'css'], function() {
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/**/*.scss', ['css']);
})