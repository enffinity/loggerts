import { info, err, warn, success, debug, bomb, custom } from './index';
import logger from './index';

info('This is INFO');
err('This is ERROR');
warn('This is WARN');
success('This is SUCCESS');
debug('This is DEBUG')
bomb('This is BOMB')
custom('This is CUSTOM')
custom('This is CUSTOM', 'CUSTOM TITLE')

logger.info('This is INFO using DEFAULT EXPORT')