const addItem = () => {
  const list = document.getElementById('list');
  const element = document.createElement('li');

  list.appendChild(element);
}

addItem();

export default addItem;