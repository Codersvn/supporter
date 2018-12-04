import { nfNotifyStyle } from '../stubs/nf-notify.css';
import { Helpers } from '../ultis/Helpers';

export default class Notification {
  constructor() {
    Helpers.addInlineStyle('nf-notify-style', nfNotifyStyle);
  }

  fadeOut(el) {
    el.className = el.className
      .split(' ')
      .filter(function(item) {
        return item !== 'nfFadeInDown';
      })
      .concat(['nfFadeOutUp'])
      .join(' ');
    return el;
  }

  fadeIn(el) {
    el.className = el.className
      .split(' ')
      .concat(['nf-animated', 'faster', 'nfFadeInDown'])
      .join(' ');
    return el;
  }

  scrollTop(pixel) {
    pixel = pixel || 0;
    document.scrollTop = pixel;
  }

  show(type, content, time, scrollTop, options) {
    options = options || {};
    time = time || 0;
    var _this = this;
    scrollTop = scrollTop || false;
    if (scrollTop !== undefined && scrollTop) {
      this.scrollTop();
    }

    this.remove();

    const notify = document.createElement('div');
    notify.id = 'nf-notify';
    notify.className = 'nf-notify notify notify-' + type;

    let icon = '';

    if (options.enableIcon === true) {
      if (type === 'success') {
        icon = 'check nf-notify-icon nf-notify-css-icon';
      }
    }

    const html = `
      <div class="nf-notify-container">
        <div class="nf-notify-content">
          <span class="${icon}'"></span>
          <div class="notify-message">${content}</div>
        </div>
        <div class="nf-close-btn">
          <span class="close nf-notify-icon nf-notify-css-icon"></span>
        </div>
      </div>
      `;
    notify.innerHTML = html;
    this.fadeIn(notify);
    document.getElementsByTagName('body')[0].appendChild(notify);
    if (time && time > 0) {
      setTimeout(function() {
        _this.fadeOut(notify);
      }, time);
    }
    document.getElementsByClassName('nf-close-btn')[0].addEventListener('click', function() {
      _this.remove();
    });
  }

  remove() {
    const notify = document.getElementById('nf-notify');
    if (notify !== null) {
      // notify.remove();
      this.fadeOut(notify);
      setTimeout(() => {
        notify.remove();
      }, 500);
    }
  }
}
