class Task {
  constructor(name) {
    this.name = name;
    this.timeAdded = new Date().toLocaleString();
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name) {
    const task = new Task(name);
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  clearAllTasks() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }
}
