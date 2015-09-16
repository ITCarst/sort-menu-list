var gulp = require("gulp"),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    jshint = require("gulp-jshint"),
    livereload = require("gulp-livereload");

//Sass
var sass = require("gulp-sass");

//Tests
var karma = require("karma");


gulp.task("lint", function () {
    return gulp.src(["assets/js/**/*.js", "test/**/*.test.js", "!test/test-main.js", "!assets/js/libs/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("sass", function () {
    return gulp.src("assets/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(notify({message : "SCSS completed"}));
});

gulp.task("test", function () {
    karma.start({
        configFile: __dirname__ + "/karma.conf.js",
        singleRun: true
    }, function (done) {
        done(exitCode ? "There are failing tests" : undefined);
    }); 
});

gulp.task("autotest", function () {
    gulp.start("test");
});

gulp.task("default", function () {
    gulp.start("sass", "lint");
});

gulp.task("watch", function () {
    gulp.watch("assets/scss/**/*.scss", ["sass"]);
});



