class RenderableElement {
  constructor(tag) {
    this.el = document.createElement(tag);
  }
}

class List {
  constructor(elWrapper) {
    this.elWrapper = elWrapper;
    this._items = [];
    this.el = document.createElement('ul');
    this.render();
  }

  addItem(item) {
    this._items = [...this._items, item];
    this.el.append(item.el);
  }

  deleteItem(index) {
    const el = [...this._items];
    el.splice(index, 1);
    this._items = el;
    this.render();
  }

  toggleItem(index) {
    this._items[index].toggleState();
    this.render();
  }

  render() {
    this.elWrapper.append(this.el);
  }
}
