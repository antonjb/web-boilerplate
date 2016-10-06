import gulp from 'gulp';
import paths from '../paths';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import { ifProd, isProd } from '../helpers';

export default function scripts() {
	const dest = isProd() ? paths.build : paths.tmp;
	const b = browserify({
		entries: paths.scripts.entry,
		basedir: paths.source,
		debug: !isProd(),
		transform: ['babelify']
	});

	return b.bundle()
		.pipe(source(paths.scripts.entry))
		.pipe(buffer())
		.pipe(ifProd(uglify))
		.on('error', gutil.log)
		.pipe(gulp.dest(dest));
}