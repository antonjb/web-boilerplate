import osTmpdir from 'os-tmpdir';

const build = `build`;
const source = `source`;
const shared = `shared`;
const tmp = `${osTmpdir()}/gulp_tooling_tmp`;

const scripts = {
	src: `${source}/${shared}/js/**/*.js`,
	entry: `${shared}/js/app.js`
};

const pug = {
	src: `${source}/**/*.pug`,
	layouts: `${source}/layouts/*.pug`,
	basedir: `${source}/layouts`
};

const css = {
	src: `${source}/${shared}/css/**/*.scss`,
	includePaths: `${source}/${shared}/css`
};

export default {
	build,
	source, 
	tmp,
	scripts,
	pug,
	css
};