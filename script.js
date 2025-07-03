function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  taskItem.onclick = function () {
    taskItem.remove();
  };

  const taskList = document.getElementById("taskList");
  taskList.appendChild(taskItem);

  taskInput.value = "";
}
