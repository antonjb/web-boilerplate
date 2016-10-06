import gutil from 'gulp-util';
import { ENV_PROD, ENV_DEV } from '../helpers'

export default function setEnvProd(done) {
	gutil.env.env = ENV_PROD;
	done();
}

export function setEnvDev(done) {
	gutil.env.env = ENV_DEV;
	done();
}