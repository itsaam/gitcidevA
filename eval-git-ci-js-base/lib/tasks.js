let tasks = [];
let nextId = 1;

function getTasks() {
    return tasks;
}

function reset() {
    tasks = [];
    nextId = 1;
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    task.done = !task.done;
    return task;
}

module.exports = { getTasks, reset, toggleTask };
