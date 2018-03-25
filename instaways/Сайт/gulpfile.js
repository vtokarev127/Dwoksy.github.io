var gulp           = require('gulp'),
		autoprefixer   = require('gulp-autoprefixer'),
		rigger         = require('gulp-rigger'),
		rename         = require('gulp-rename'),
		concat         = require('gulp-concat'),
		minify				 = require('gulp-minify-css'),
		uglify         = require('gulp-uglify'),
		del            = require('del'),
		browserSync    = require('browser-sync'),
		sass           = require('gulp-sass'),
		sourcemaps     = require('gulp-sourcemaps'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		notify         = require('gulp-notify'),
		reload         = browserSync.reload;

var path = {
		dist: {
				html: 'dist/',
				js: 'dist/js/',
				css: 'dist/css/',
				img: 'dist/img/',
				fonts: 'dist/fonts/'
		},
		src: {
				html: 'src/*.html',
				js: 'src/js/main.js',
				style: 'src/style/main.sass',
				img: 'src/img/**/*.*', 
				fonts: 'src/fonts/**/*.*'
		},
		watch: {
				html: 'src/**/*.html',
				js: 'src/js/**/*.js',
				style: 'src/style/**/*.sass',
				img: 'src/img/**/*.*',
				fonts: 'src/fonts/**/*.*'
		},
		clean: './dist'
};

gulp.task('html:build', function () {
		gulp.src(path.src.html)
				.pipe(rigger())
				.pipe(gulp.dest(path.dist.html)) 
				.pipe(reload({stream: true})); 
});

gulp.task('js:build', function () {
		gulp.src([
				'src/libs/jquery/dist/jquery.min.js',
				'src/libs/owl-carousel/owl.carousel.min.js',
				'src/libs/magnific-popup/jquery.magnific-popup.min.js',
				'src/libs/time/TimeCircles.js',
				path.src.js
				])
				.pipe(rigger())
				.pipe(concat('main.js'))
				.pipe(gulp.dest(path.dist.js))
				.pipe(uglify())
				.pipe(rename({suffix: '.min', prefix : ''}))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.dist.js))
				.pipe(reload({stream: true}));
});

gulp.task('scss:build', function () {
		gulp.src(path.src.style)
				.pipe(sourcemaps.init())
				.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
				.pipe(autoprefixer())
				.pipe(gulp.dest(path.dist.css))
				.pipe(minify())
				.pipe(rename({suffix: '.min', prefix : ''}))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.dist.css))
				.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('fonts:build', function() {
		gulp.src(path.src.fonts)
				.pipe(gulp.dest(path.dist.fonts))
});

gulp.task('imagemin', function() {
	return gulp.src(path.src.img)
	.pipe(cache(imagemin()))
	.pipe(gulp.dest(path.dist.img)); 
});

gulp.task('removedist', function() { return del.sync('dist'); });

gulp.task('build', [
		'removedist',
		'html:build',
		'js:build',
		'scss:build',
		'fonts:build',
		'imagemin'
]);

gulp.task('watch', function(){
		gulp.watch([path.watch.html], function(event, cb) {
				gulp.start('html:build');
		});
		gulp.watch([path.watch.style], function(event, cb) {
				gulp.start('scss:build');
		});
		gulp.watch([path.watch.js], function(event, cb) {
				gulp.start('js:build');
		});
		gulp.watch([path.watch.img], function(event, cb) {
				gulp.start('imagemin');
		});
		gulp.watch([path.watch.fonts], function(event, cb) {
				gulp.start('fonts:build');
		});
});

gulp.task('default', ['build', 'browser-sync', 'watch']);