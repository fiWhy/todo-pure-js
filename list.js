class List {
  constructor() {
    this._items = [];
  }

  addItem(item) {
    this._items = [...this._items, item];
    this.render();
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

  renderItems() {
    return `
        <ul>
            ${this._items
              .map(
                (item) => `
                <li class="${item.state ? 'crossed' : ''}">${item.content}</li>
            `
              )
              .join('')}
        </ul>
      `;
  }

  render() {
    document.body.innerHTML = this.renderItems();
  }
}
