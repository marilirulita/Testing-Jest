class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

function addItem(input, list) {
  const newTask = new Task(input.value, false, list.length);
  list.push(newTask);
  input.value = '';
}

module.exports= addItem;