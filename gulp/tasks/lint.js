import gulp from 'gulp';
import eslint from 'gulp-eslint';
import paths from '../paths';
import { isProd } from '../helpers';

export default function lint() {

	const devRules = {
		'no-console': 0,
		'no-unused-vars': 1
	}

	return gulp.src(paths.scripts.src)
		.pipe(eslint({
			rules: isProd() ? {} : devRules
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}