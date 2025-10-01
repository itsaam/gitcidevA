// Simple in-memory task list
let tasks = [];
let nextId = 1;

function addTask(name) {
    const task = { id: nextId++, name, done: false };
    tasks.push(task);
    return task;
}

function getTasks() {
    return tasks;
}

function reset() {
    tasks = [];
    nextId = 1;
}

module.exports = { getTasks, reset , addTask };
