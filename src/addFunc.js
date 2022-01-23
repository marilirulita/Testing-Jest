class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addItem = (input, list) => {
  const newTask = new Task(input.value, false, list.length);
  list.push(newTask);
  input.value = '';
}

export default addItem;