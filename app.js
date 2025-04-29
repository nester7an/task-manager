const taskManager = new TaskManager();
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const clearAllButton = document.getElementById('clearAllButton');
const taskList = document.getElementById('taskList');

// Функция для отображения задач
function renderTasks() {
  taskList.innerHTML = '';
  taskManager.getTasks().forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task.name} <span class="time"> ${task.timeAdded}</span>
      <button class="delete" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Функция для добавления задачи
function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName) {
    taskManager.addTask(taskName);
    taskInput.value = '';
    renderTasks();
  }
}

// Функция для удаления задачи
function deleteTask(index) {
  taskManager.removeTask(index);
  renderTasks();
}

// Функция для очистки всех задач
function clearAllTasks() {
  taskManager.clearAllTasks();
  renderTasks();
}

addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAllTasks);

// Изначально отобразить все задачи (если они есть)
renderTasks();
