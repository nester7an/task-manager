const taskManager = new TaskManager();
const taskInput = document.getElementById('taskInput');
const importantCheckbox = document.getElementById('importantCheckbox');
const addTaskButton = document.getElementById('addTaskButton');
const clearAllButton = document.getElementById('clearAllButton');
const taskList = document.getElementById('taskList');

function renderTasks() {
  taskList.innerHTML = '';
  taskManager.getTasks().forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.isImportant ? 'important' : ''}">
        ${task.isImportant ? '❗ ' : ''}${task.name}
      </span>
      <span class="time">${task.timeAdded}</span>
      <button class="delete" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskName = taskInput.value.trim();
  const isImportant = importantCheckbox.checked;
  if (taskName) {
    taskManager.addTask(taskName, isImportant);
    taskInput.value = '';
    importantCheckbox.checked = false;
    renderTasks();
  }
}

function deleteTask(index) {
  taskManager.removeTask(index);
  renderTasks();
}

function clearAllTasks() {
  taskManager.clearAllTasks();
  renderTasks();
}

addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAllTasks);

renderTasks();
