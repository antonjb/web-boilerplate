import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import nano from 'gulp-cssnano';
import paths from '../paths';
import { ifProd, isProd } from '../helpers';

export default function css() {
	return gulp.src(paths.css.src, { base: paths.source })
		.pipe(sass({
			includePaths: [ paths.css.includePaths],
			sourceMapEmbed: !isProd()
		}))
		.on('error', gutil.log)
		.pipe(postcss([autoprefixer({ browsers: ['last 2 versions', 'ie 9-11'] })]))
		.pipe(ifProd(nano))
		.pipe(gulp.dest(isProd() ? paths.build : paths.tmp));
}