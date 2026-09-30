export function setupExperiment4() {
  let tasks: string[] = [];

  const taskInput = document.getElementById(
    "taskInput"
  ) as HTMLInputElement;

  const addTaskButton = document.getElementById(
    "addTaskButton"
  ) as HTMLButtonElement;

  const taskList = document.getElementById(
    "taskList"
  ) as HTMLDivElement;

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const taskItem = document.createElement("div");

      taskItem.className = "task-item";

      taskItem.innerHTML = `
        <span>${task}</span>
        <button class="delete-button" data-index="${index}">
          Delete
        </button>
      `;

      taskList.appendChild(taskItem);
    });

    const deleteButtons =
      document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = Number(
          (button as HTMLElement).getAttribute("data-index")
        );

        tasks.splice(index, 1);

        renderTasks();
      });
    });
  }

  addTaskButton.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
      return;
    }

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
  });

  renderTasks();
}