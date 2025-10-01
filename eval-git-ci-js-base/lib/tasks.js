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

function addTask(name) {
    const task = { id: nextId++, name, done: false };
    tasks.push(task);
    return task;
}

function countDone() {
    return tasks.filter(task => task.done).length;
}

module.exports = { getTasks, reset , addTask , countDone , toggleTask };
