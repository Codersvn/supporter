export const nfNotifyStyle = `
.nf-notify-css-icon.nf-notify-icon.close {
  color: #fff;
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.nf-notify-css-icon.nf-notify-icon.close:before {
  transform: rotate(-45deg);
}
.nf-notify-css-icon.nf-notify-icon.close:after,
.nf-notify-css-icon.nf-notify-icon.close:before {
  content: "";
  position: absolute;
  top: 10px;
  width: 20px;
  height: 2px;
  background-color: #fff;
}
.nf-notify-css-icon.nf-notify-icon.close:after {
  transform: rotate(45deg);
}
.nf-notify-css-icon.nf-notify-icon.check {
  color: #fff;
  position: absolute;
  margin-left: -18px;
  margin-top: 4px;
  width: 10px;
  height: 4px;
  border-bottom: 2px solid currentColor;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
}
.notify.notify-warning .nf-notify-css-icon.nf-notify-icon.check {
  display: none;
}
.nf-notify {
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.nf-notify .nf-notify-container {
  display: flex;
  align-items: center;
  padding: 8px;
}
.nf-notify .nf-notify-container .nf-notify-content {
  text-align: center;
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
.nf-notify .nf-notify-container .nf-close-btn {
  flex-shrink: 1;
  cursor: pointer;
  width: 20px;
  height: 20px;
}
.nf-notify .nf-notify-container .right-align {
  float: right;
  cursor: pointer;
}
.nf-notify .nf-notify-container .notify-message {
  font-family: arial;
  font-size: 14px;
}
.nf-notify .nf-notify-container a {
  color: #fff;
  text-decoration: underline;
}
.notify.notify-success {
  background: #00e676;
}
.notify.notify-warning {
  background: #fa9325;
}

.nf-animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.nf-animated.fast {
  animation-duration: 800ms;
}

.nf-animated.faster {
  animation-duration: 500ms;
}

.nf-animated.slow {
  animation-duration: 2s;
}

.nf-animated.slower {
  animation-duration: 3s;
}

@keyframes nfFadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.nfFadeInDown {
  animation-name: nfFadeInDown;
}

@keyframes nfFadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

.nfFadeOutUp {
  animation-name: nfFadeOutUp;
}

@media (prefers-reduced-motion) {
  .nf-animated {
    animation: unset !important;
    transition: none !important;
  }
}

`;
