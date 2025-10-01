const { getTasks, reset, addTask , countDone } = require('../lib/tasks');

beforeEach(() => {
    reset();
});

test('initial task list is empty', () => {
    expect(getTasks()).toEqual([]);
});

test('adding a task', () => {
    const task = addTask('Test task');
    expect(task).toEqual({ id: 1, name: 'Test task', done: false });
    expect(getTasks()).toEqual([task]);
});

test('counting done tasks', () => {
    addTask('Task 1');
    const task2 = addTask('Task 2');
    task2.done = true;
    addTask('Task 3');
    expect(countDone()).toBe(1);
});