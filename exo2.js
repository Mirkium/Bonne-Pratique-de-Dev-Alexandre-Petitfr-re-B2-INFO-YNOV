const tasks = [
  { id: 1, title: "Mettre à jour le README", completed: false },
  { id: 2, title: "Corriger le bug du formulaire", completed: true },
  { id: 3, title: "Revoir les PRs en attente", completed: false },
  { id: 4, title: "Nettoyer le CSS", completed: true }
];

const tasksListEl = document.querySelector("#tasks-list");
const emptyStateEl = document.querySelector("#empty-state");

const btnAll = document.querySelector("#filter-all-btn");
const btnActive = document.querySelector("#filter-active-btn");
const btnCompleted = document.querySelector("#filter-completed-btn");

let currentFilter = "all";

function getFilteredTasks() {
  if (currentFilter === "active") return tasks.filter(t => !t.completed);
  if (currentFilter === "completed") return tasks.filter(t => t.completed);
  return tasks;
}

function renderTasks() {
  const filtered = getFilteredTasks();
  tasksListEl.innerHTML = "";

  if (filtered.length === 0) {
    emptyStateEl.style.display = "block";
    emptyStateEl.textContent =
      currentFilter === "active" ? "Aucune tâche en cours."
      : currentFilter === "completed" ? "Aucune tâche terminée."
      : "Aucune tâche à afficher.";
    return;
  }

  emptyStateEl.style.display = "none";

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = task.title;

    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    li.appendChild(span); 
    tasksListEl.appendChild(li); 
  });

}

btnAll.addEventListener("click", () => { currentFilter = "all"; renderTasks(); });
btnActive.addEventListener("click", () => { currentFilter = "active"; renderTasks(); });
btnCompleted.addEventListener("click", () => { currentFilter = "completed"; renderTasks(); });

renderTasks();
