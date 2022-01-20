//import '@testing-library/jest-dom';

const addItem = () => {
  const list = document.getElementById('list');
  const element = document.createElement('li');

  list.appendChild(element);
}

addItem();

export default addItem;