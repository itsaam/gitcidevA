const { getTasks, reset, addTask , countDone, toggleTask} = require('../lib/tasks');

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

describe('toggleTask', () => {
    beforeEach(() => reset());

    test('bascule une tâche existante', () => {
        const tasks = getTasks();
        tasks.push({ id: 1, name: 'Cours', done: false });

        const result = toggleTask(1);
        expect(result.done).toBe(true);

        toggleTask(1);
        expect(result.done).toBe(false);
    });

    test('retourne null si id inexistant', () => {
        expect(toggleTask(99)).toBeNull();
    });
});