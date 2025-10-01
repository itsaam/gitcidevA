const { getTasks, reset, toggleTask } = require('../lib/tasks');

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
