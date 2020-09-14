class Item {
  constructor(content) {
    this.content = content;
    this.state = false;
    this.el = document.createElement('li');
    this.setContent(content);
  }

  setContent(content) {
    this.el.innerText = content;
  }

  toggleState() {
    this.state = !this.state;
    this.el.classList.toggle('crossed');
  }
}
