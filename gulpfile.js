var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('browserify', function onBrowserify () {
  var bundler = browserify({
    'entries': ['./lib/app.jsx'],
    'transform': [reactify],
    'debug': true,
    'cache': {},
    'packageCache': {},
    'fullPaths': true
  });
  var watcher = watchify(bundler);

  return watcher
    .on('update', function onUpdate () {
      var updateStart = Date.now();

      console.log('Updating...');
      watcher.bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./build/'));
      console.log('Updated ', Date.now() - updateStart + 'ms');
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['browserify']);
