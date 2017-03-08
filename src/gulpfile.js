var gulp = require('gulp');
var shell = require('gulp-shell');


// Tarea ejemplo2 -------------------------------------------------------

gulp.task('ejemplo2', function(){
	return gulp.src('.').pipe(shell(['node ejemplo_cap9.js']));
});
