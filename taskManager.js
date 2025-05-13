
class Task {
  constructor(name) {
    this.name = name;
    this.timeAdded = new Date().toLocaleString();
    this.isImportant = false;
  }
}

class ImportantTask extends Task {
  constructor(name) {
    super(name);
    this.isImportant = true;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name, isImportant = false) {
    const task = isImportant ? new ImportantTask(name) : new Task(name);
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
