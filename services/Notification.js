import $ from 'jquery';
import { nfNotifyStyle } from '../stubs/nf-notify.css';
import { Helpers } from '../ultis/Helpers';
export default class Notification {
  constructor() {
    Helpers.addInlineStyle('nf-notify-style', nfNotifyStyle);
  }
  scrollTop() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500
    );
  }
  show(type, content, time, scrollTop, options) {
    options = options || {};
    time = time || 0;
    scrollTop = scrollTop || false;
    if (scrollTop !== undefined && scrollTop) {
      this.scrollTop();
    }

    this.remove();
    let notify;
    if (document.getElementById('nf-notify') === null) {
      notify = document.createElement('div');
    } else {
      notify = document.getElementById('nf-notify');
    }
    notify.id = 'nf-notify';
    notify.className = 'nf-notify notify notify-' + type;
    let icon;
    if (type === 'warning') {
      icon = '';
    } else if (type === 'success') {
      icon = 'check nf-notify-icon nf-notify-css-icon';
    } else if (options.icon !== undefined) {
      icon = options.icon;
    }
    const html =
      '<div class="nf-notify-container"><div class="nf-notify-content"><span class="' +
      icon +
      '"></span><span class="notify-message">' +
      content +
      '</span></div><div class="nf-close-btn"><span class="close nf-notify-icon nf-notify-css-icon"></span></div></div>';
    notify.innerHTML = html;
    $('body').prepend(notify);
    $(notify).animate(
      {
        height: 40
      },
      500
    );
    if (time && time > 0) {
      setTimeout(function() {
        $(notify).animate(
          {
            height: 0
          },
          250
        );
      }, time);
    }
    $(notify)
      .find('.nf-close-btn')
      .click(function() {
        if ($('body').find('#nf-notify').length) {
          $('#nf-notify').remove();
        }
      });
  }
  remove() {
    if ($('body').find('#nf-notify').length) {
      $('#nf-notify').remove();
    }
  }
}
