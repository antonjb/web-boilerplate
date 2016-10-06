import gulp from 'gulp';
import pug from 'gulp-pug';
import paths from '../paths';
import { isProd } from '../helpers';

export default function pugCompile() {
	return gulp.src([paths.pug.src, `!${paths.pug.layouts}`])
		.pipe(pug({
			basedir: paths.pug.basedir
		}))
		.pipe(gulp.dest(isProd() ? paths.build : paths.tmp));
}