import Character from '../undead';

describe('this class creates a new character', () => {
  test('create a new character', () => {
    const character = new Character('Test');
    const result = {
      name: 'Test',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(character).toMatchObject(result);
  });
});
