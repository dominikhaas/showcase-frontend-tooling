
import i18n from './src/i18n/i18n'
import { config } from '@vue/test-utils';

if (!globalThis.defined) {
  config.global.plugins = [i18n];
  globalThis.defined = true;
}
