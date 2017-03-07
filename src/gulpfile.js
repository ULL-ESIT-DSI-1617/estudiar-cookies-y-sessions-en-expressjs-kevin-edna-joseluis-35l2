var gulp = require('gulp');
var shell = require('gulp-shell');


// Tarea ejemplo1 -------------------------------------------------------

gulp.task('ejemplo1', function(){
	return gulp.src('.').pipe(shell(['node ej1.js']))
});


// Tarea ejemplo2 -------------------------------------------------------

gulp.task('ejemplo2', function(){
	return gulp.src('.').pipe(shell(['node ej2.js']))
});


// Tarea ejemplo3 -------------------------------------------------------

gulp.task('ejemplo3', function(){
	return gulp.src('.').pipe(shell(['node ej3.js']))
});


// Tarea ejemplo4 -------------------------------------------------------

gulp.task('ejemplo4', function(){
	return gulp.src('.').pipe(shell(['node ej4.js']))
});


// Tarea ejemplo5 -------------------------------------------------------

gulp.task('ejemplo5', function(){
	return gulp.src('.').pipe(shell(['node ej5.js']))
});


// Tarea ejemplo6 -------------------------------------------------------

gulp.task('ejemplo6', function(){
	return gulp.src('.').pipe(shell(['node ej6.js']))
});


// Tarea por defecto ----------------------------------------------------
gulp.task('default', ['ejemplo1', 'ejemplo2', 'ejemplo3', 'ejemplo4', 'ejemplo5', 'ejemplo6']);
