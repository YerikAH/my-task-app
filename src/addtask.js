export default function add() {
  const yesTask = document.querySelector(".seto");
  const nose = document.querySelector(".tasks_ul");
  const first = document.querySelector(".second");
  const agregarBTN = document.querySelector(".desktop-more");
  const input = document.querySelector(".add");
  const ul = document.querySelector(".tasks_ul");
  let tasks = [];

  agregarBTN.addEventListener("click", (e) => {
    addTasks();
  });

  evento();
  function evento() {
    document.addEventListener("DOMContentLoaded", () => {
      tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      createHTML();
    });
    ul.addEventListener("click", deleteTask);
  }

  function deleteTask(e) {
    if (e.target.tagName == "svg" || e.target.tagName == "path") {
      const deleteID = parseInt(e.target.getAttribute("task-id"));
      tasks = tasks.filter((task) => task.id !== deleteID);
      createHTML();
    }
  }

  function addTasks() {
    const task = input.value;
    if (task === "") {
      theError('There are no tasks that are "nothing"');
      return;
    }
    const taskObj = {
      task,
      id: Date.now(),
    };
    tasks = [...tasks, taskObj];
    createHTML();
    input.value = "";
  }

  function createHTML() {
    clearHTML();
    if (tasks.length > 0) {
      tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "lista_task";
        li.innerHTML = `${task.task} <span><svg task-id=${task.id}  class="delete-task" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  task-id=${task.id}  d="M1 14.5C1 14.8978 1.15804 15.2794 1.43934 15.5607C1.72064 15.842 2.10218 16 2.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V4H1V14.5ZM9.5 6.5C9.5 6.36739 9.55268 6.24022 9.64645 6.14645C9.74021 6.05268 9.86739 6 10 6C10.1326 6 10.2598 6.05268 10.3536 6.14645C10.4473 6.24022 10.5 6.36739 10.5 6.5V13.5C10.5 13.6326 10.4473 13.7598 10.3536 13.8536C10.2598 13.9473 10.1326 14 10 14C9.86739 14 9.74021 13.9473 9.64645 13.8536C9.55268 13.7598 9.5 13.6326 9.5 13.5V6.5ZM6.5 6.5C6.5 6.36739 6.55268 6.24022 6.64645 6.14645C6.74021 6.05268 6.86739 6 7 6C7.13261 6 7.25979 6.05268 7.35355 6.14645C7.44732 6.24022 7.5 6.36739 7.5 6.5V13.5C7.5 13.6326 7.44732 13.7598 7.35355 13.8536C7.25979 13.9473 7.13261 14 7 14C6.86739 14 6.74021 13.9473 6.64645 13.8536C6.55268 13.7598 6.5 13.6326 6.5 13.5V6.5ZM3.5 6.5C3.5 6.36739 3.55268 6.24022 3.64645 6.14645C3.74021 6.05268 3.86739 6 4 6C4.13261 6 4.25979 6.05268 4.35355 6.14645C4.44732 6.24022 4.5 6.36739 4.5 6.5V13.5C4.5 13.6326 4.44732 13.7598 4.35355 13.8536C4.25979 13.9473 4.13261 14 4 14C3.86739 14 3.74021 13.9473 3.64645 13.8536C3.55268 13.7598 3.5 13.6326 3.5 13.5V6.5ZM13.5 1.00001H9.75L9.45625 0.41563C9.39402 0.290697 9.29817 0.185606 9.17947 0.11218C9.06078 0.0387537 8.92395 -9.46239e-05 8.78438 5.47897e-06H5.2125C5.07324 -0.00052985 4.93665 0.0381736 4.81838 0.111682C4.7001 0.18519 4.60492 0.290529 4.54375 0.41563L4.25 1.00001H0.5C0.367392 1.00001 0.240215 1.05268 0.146447 1.14645C0.0526784 1.24022 0 1.3674 0 1.5L0 2.5C0 2.63261 0.0526784 2.75979 0.146447 2.85356C0.240215 2.94733 0.367392 3 0.5 3H13.5C13.6326 3 13.7598 2.94733 13.8536 2.85356C13.9473 2.75979 14 2.63261 14 2.5V1.5C14 1.3674 13.9473 1.24022 13.8536 1.14645C13.7598 1.05268 13.6326 1.00001 13.5 1.00001Z" fill="#333333"/>
        </svg>
        </span>`;
        ul.appendChild(li);
      });
    }
    if (nose.childElementCount == 0) {
      yesTask.style.setProperty("display", "grid");
    } else {
      yesTask.style.setProperty("display", "none");
    }
    sincronizar();
  }

  function sincronizar() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function theError(err) {
    const message = document.createElement("p");
    message.textContent = err;
    first.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 4000);
  }

  function clearHTML() {
    ul.innerHTML = "";
  }

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      addTasks();
    }
  });
}
