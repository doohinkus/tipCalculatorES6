const gulp = require('gulp');
// plugins
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const pxtorem = require('postcss-pxtorem');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const browserify = require('gulp-browserify');


gulp.task('css', ()=>{
  const processors = [
    cssnext,
    pxtorem({
      propWhiteList: [],
      mediaQuery: true
    })
  ]
  return gulp.src('./src/css/*.css')
    .pipe( postcss(processors) )
    .pipe( gulp.dest('./dist/css') )
});

gulp.task('pug', ()=>{
  return gulp.src('./src/*.pug')
    .pipe( pug({
      pretty: true
    }))
    .pipe( gulp.dest('./dist'))
});

gulp.task('img', ()=>{
  return gulp.src('./src/img/*')
    .pipe( gulp.dest('./dist/img/'))
});

gulp.task("babel", ()=> {
  return gulp.src("./src/js/app.js")
    .pipe(babel())
    .pipe(gulp.dest("./dist/js/"));
});
// added

gulp.task("babel-transpile", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/"));
});
//browserify
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./src/js/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('dist/js'))
});

// added

gulp.task("default", ()=>{
  gulp.watch('./src/css/*.css', ["css"])
  gulp.watch('./src/img/*', ["img"])
  gulp.watch('./src/*.pug', ["pug"])
  gulp.watch('./src/js/*.js', ["scripts"])
  gulp.watch('./src/js/*.js', ["babel"])
});

//travis
gulp.task("travis", ['pug','css','babel', 'babel-transpile', 'scripts', 'img'], function(){
  process.exit(0);
});
