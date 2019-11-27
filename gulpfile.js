var gulp        = require("gulp"),
    sass        = require('gulp-sass'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync'),
    gulpif      = require('gulp-if'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs');


var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task('html', function(calback) {
  gulp.src(['./app/index.html', './app/post.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './app/_include'
    }))
    .pipe(gulp.dest('./build'));
    calback()
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./build"
		},
    port: 3000,
		notify: false,
		open: false
	});
});

  gulp.task('sass', function () {
  return gulp.src('./app/_sass/main.scss')
  .pipe(gulpif(isDevelopment, sourcemaps.init()))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulpif(isDevelopment ,sourcemaps.write()))
  .pipe(gulp.dest('./build/assets/css'))
  .pipe(browserSync.reload({stream:true}));
});

  gulp.task("can__min--js", function () {
          return gulp.src('./app/assets/**/*.js')
              .pipe(concat('libs-min.js'))
              .pipe(uglify())
              .pipe(gulp.dest('./build/assets/js'));
  });

  gulp.task("assets", function(){
    return gulp.src(["!./app/assets/**/*.js" ,"./app/assets/**"])
    .pipe(gulp.dest("./build/assets"))
  });

gulp.task('default', ['browser-sync','html',"sass",'assets', 'can__min--js'], function() {
	gulp.watch(['app/_include/*.*',"./app/index.html","./app/post.html"], ['html']);
	gulp.watch('app/_sass/**/*.scss', ['sass']);
	gulp.watch('./app/assets/**/*.*' , ['assets']);
	gulp.watch('build/index.html', browserSync.reload);
});
