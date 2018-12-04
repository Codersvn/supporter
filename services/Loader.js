import { Helpers } from '../ultis/Helpers';
import { nfLoaderStyle } from '../stubs/nf-loader.css';

export default class Loader {
  /**
   * Show loader
   *
   * @return void
   */
  static show() {
    Helpers.addInlineStyle('nf-loader', nfLoaderStyle);
    const el = document.getElementById('nf-preloader');
    if (el === null) {
      const notify = document.createElement('div');
      notify.id = 'nf-preloader';
      notify.innerHTML = '<div class="nf-preloader-bg"><div class="progress"><div class="indeterminate"></div></div></div>';
      document.getElementsByTagName('body')[0].appendChild(notify);
    }
  }

  /**
   * Hide loader
   *
   * @return void
   */
  static hide() {
    const el = document.getElementById('nf-preloader');
    if (el !== null) {
      el.remove();
    }
  }
}
