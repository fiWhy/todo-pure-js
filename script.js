const app = document.getElementById('app');

const input = document.createElement('input');
input.type = 'text';

app.append(input);

const list = new List(app);

list.addItem(new Item('First'));
list.addItem(new Item('Second'));
list.addItem(new Item('Third'));

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    input.value.trim() && list.addItem(new Item(input.value));
    input.value = '';
  }
});

const div = document.createElement('div'),
  div2 = div.cloneNode(),
  div3 = div.cloneNode();

div.className = 'div1';
div2.className = 'div2';
div3.className = 'div3';

div.append(div2);
div2.append(div3);

app.append(div);

div.addEventListener('click', () => console.log('Click 1'));
div2.addEventListener('click', () => console.log('Click 2'));
div3.addEventListener('click', () => console.log('Click 3'));
