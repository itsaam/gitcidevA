const { getTasks, reset, addTask } = require('../lib/tasks');

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
