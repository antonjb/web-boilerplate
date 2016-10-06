import del from 'del';
import paths from '../paths';
import { isProd } from '../helpers';

export default function clean() {
	const dir = `${ isProd() ? paths.build : paths.tmp }/*`;
	return del([dir], { force: !isProd() });
}