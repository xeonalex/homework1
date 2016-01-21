var gulp=require('gulp'),
	wiredep=require('wiredep').stream,
	browserSync=require('browser-sync');

gulp.task('bower',function () {
	gulp.src('./app/index.html')
	.pipe(wiredep({
		directory: "./app/bower_components"

	}))
	.pipe(gulp.dest('./app'))
})

gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower'])
})
gulp.task('server',function(){
	browserSync({
		port: 9000,
		server: {
			baseDir: ['app/', 'css/']
		}
	});
});

gulp.task('browser-watch', function() {
gulp.watch([
	'app/index.html',
	'app/css/*.css',
	'app/js/*.js']).on('change', browserSync.reload);

});


gulp.task('default', ["server","browser-watch"]);