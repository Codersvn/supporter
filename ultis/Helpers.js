export class Helpers {
  static addInlineStyle(id, content) {
    const notify_style = document.getElementById(id);
    if (notify_style === null) {
      const style = document.createElement('style');
      style.id = id;
      style.innerHTML = content;
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }
}
