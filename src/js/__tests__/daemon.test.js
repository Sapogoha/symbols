import Daemon from '../daemon';

describe('this class creates a new character', () => {
  test('create a new character', () => {
    const character = new Daemon('Test');
    const result = {
      name: 'Test',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(character).toMatchObject(result);
  });
});
