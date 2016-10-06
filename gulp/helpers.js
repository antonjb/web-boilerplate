import gutil from 'gulp-util';

export const ENV_PROD = 'production';
export const ENV_DEV = 'dev';

function ifEnv(env, task) {
	return gutil.env.env === env 
		? task()
		: gutil.noop();
}

const isProd = () => gutil.env.env === ENV_PROD;
const ifDev = ifEnv.bind(null, ENV_DEV);
const ifProd = ifEnv.bind(null, ENV_PROD);

export { ifDev, ifProd, isProd }