
// Add task
function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('todoList');
  
  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }
  
  var taskItem = document.createElement('div');
  taskItem.className = 'todo-item';
  
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  var taskText = document.createElement('span');
  taskText.textContent = taskInput.value;
  
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });
  
  var editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', function() {
    var updatedTask = prompt('Enter updated task:', taskText.textContent);
    if (updatedTask !== null && updatedTask.trim() !== '') {
      taskText.textContent = updatedTask;
    }
  });
  
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);
  taskItem.appendChild(editBtn);
  
  taskList.appendChild(taskItem);
  
  taskInput.value = '';
}

// Event listener for add button
document.getElementById('addBtn').addEventListener('click', addTask);

// Event listener for enter key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

