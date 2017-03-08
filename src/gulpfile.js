var gulp = require('gulp');
var shell = require('gulp-shell');



// Tarea ejemplo1 -------------------------------------------------------

gulp.task('ejemplo2', function(){
	return gulp.src('.').pipe(shell(['node ejemplo_cap8.js']));
});



// Tarea ejemplo2 -------------------------------------------------------

gulp.task('ejemplo2', function(){
	return gulp.src('.').pipe(shell(['node ejemplo_cap9.js']));
});


// Tarea Default -------------------------------------------------------
gulp.task('default', ['ejemplo1', 'ejemplo2']);