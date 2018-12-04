export default class Loader {
  constructor() {
    const notify_style = document.getElementById('notify-style');
    if (notify_style === null) {
      const style = document.createElement('style');
      style.id = 'notify-style';
      style.innerHTML = `
      @-webkit-keyframes indeterminate {
        0% {
          left: -35%;
          right: 100%;
        }
        60% {
          left: 100%;
          right: -90%;
        }
        100% {
          left: 100%;
          right: -90%;
        }
      }
      @keyframes indeterminate {
        0% {
          left: -35%;
          right: 100%;
        }
        60% {
          left: 100%;
          right: -90%;
        }
        100% {
          left: 100%;
          right: -90%;
        }
      }
      @-webkit-keyframes indeterminate-short {
        0% {
          left: -200%;
          right: 100%;
        }
        60% {
          left: 107%;
          right: -8%;
        }
        100% {
          left: 107%;
          right: -8%;
        }
      }
      @keyframes indeterminate-short {
        0% {
          left: -200%;
          right: 100%;
        }
        60% {
          left: 107%;
          right: -8%;
        }
        100% {
          left: 107%;
          right: -8%;
        }
      }
      #nf-preloader .nf-preloader-bg {
        z-index: 9999;
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
      }
      #nf-preloader .nf-preloader-bg .progress {
        position: relative;
        height: 4px;
        display: block;
        width: 100%;
        background-color: #acece6;
        border-radius: 2px;
        overflow: hidden;
      }
      #nf-preloader .nf-preloader-bg .progress .indeterminate {
        background-color: #d35400;
      }
      #nf-preloader .nf-preloader-bg .progress .indeterminate:before {
        content: "";
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      }
      #nf-preloader .nf-preloader-bg .progress .indeterminate:after {
        content: "";
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        -webkit-animation-delay: 1.15s;
        animation-delay: 1.15s;
      }
      `;
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }
  show() {
    const el = document.getElementById('nf-preloader');
    if (el === null) {
      const notify = document.createElement('div');
      notify.id = 'nf-preloader';
      notify.innerHTML = '<div class="nf-preloader-bg"><div class="progress"><div class="indeterminate"></div></div></div>';
      document.getElementsByTagName('body')[0].appendChild(notify);
    }
  }
  hide() {
    const el = document.getElementById('nf-preloader');
    if (el !== null) {
      el.remove();
    }
  }
}
