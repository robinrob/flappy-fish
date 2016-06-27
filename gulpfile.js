var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

var cocos = require('./project.json');


gulp.task('default', ['browser-sync', 'watch'])

gulp.task('browser-sync', function() {
    browserSync({
        server: {},
        browser: 'google chrome canary'
    });
});

gulp.task('cocos-rebuild', function() {
   browserSync.reload()
})

gulp.task('watch', function () {
    gulp.watch(['*.html', '*.js', 'src/**/*.js', 'res/*', '*.json'], ['cocos-rebuild']);
});

gulp.task('js', function () {
    return gulp.src(cocos.jsList)
        .pipe(concat('game.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('compress', function () {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
