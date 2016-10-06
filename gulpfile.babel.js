import gulp from 'gulp';
import { clean, setEnvProd, lint, scripts, pug, css } from './gulp/tasks/'

const build = gulp.series(setEnvProd, clean, gulp.parallel(pug, css, scripts));

export {
	clean,
	lint,
	scripts,
	pug,
	css,
	build
}

export default build;