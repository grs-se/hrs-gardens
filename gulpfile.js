"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var rename = require("gulp-rename");
var autoprefixer = require("autoprefixer");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
	return gulp
		.src("./sass/main.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(rename("style.css"))
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest("./css"));
});
