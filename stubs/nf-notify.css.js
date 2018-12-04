export const nfNotifyStyle = `
.nf-notify-css-icon.nf-notify-icon.close {
  color: #fff;
  position: absolute;
  width: 21px;
  height: 21px;
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
  width: 21px;
  height: 2px;
  background-color: #fff;
}
.nf-notify-css-icon.nf-notify-icon.close:after {
  transform: rotate(45deg);
}
.nf-notify-css-icon.nf-notify-icon.check {
  color: #fff;
  position: absolute;
  margin-left: -20px;
  margin-top: 2px;
  width: 14px;
  height: 8px;
  border-bottom: 2px solid currentColor;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
}
.notify.notify-warning .nf-notify-css-icon.nf-notify-icon.check {
  display: none;
}
.nf-notify {
  display: -ms-flexbox;
  display: flex;
  height: 0;
  color: #fff;
  overflow: hidden;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
}
.nf-notify .nf-notify-container {
  display: flex;
  width: 100%;
}
.nf-notify .nf-notify-container .nf-notify-content {
  flex-grow: 1;
  text-align: center;
}
.nf-notify .nf-notify-container .nf-close-btn {
  width: 30px;
  position: relative;
  padding: 0 5px;
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

`;
