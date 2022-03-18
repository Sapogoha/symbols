import Character from '../character';
import Bowman from '../bowman';

describe('this class creates a new character', () => {
  test('create a new character with a name that is not a string', () => {
    expect(() => new Character(1111111, 'Bowman')).toThrowError(
      new Error('type of name must be a string'),
    );
  });

  test('create a new character with a way too short name', () => {
    expect(() => new Character('a', 'Bowman')).toThrowError(
      new Error('name must be longer than 2 characters'),
    );
  });

  test('create a new character with a way too long name', () => {
    expect(
      () => new Character('This name is way too long', 'Bowman'),
    ).toThrowError(new Error('name must be shorter than 10 characters'));
  });

  test('create a new character with a type that is not a string', () => {
    expect(() => new Character('Test', 111111)).toThrowError(
      new Error('type of type must be a string'),
    );
  });

  test('create a new character with a wrong type', () => {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    expect(() => new Character('Test', 'Test')).toThrowError(
      new Error(`type must be one of those 6: ${types}`),
    );
  });

  test('create a new character with a correct name', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.name).toBe('Test');
  });

  test('create a new character with a correct type', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.type).toBe('Bowman');
  });

  test('create a new character', () => {
    const character = new Character('Test', 'Bowman');
    const result = {
      name: 'Test',
      type: 'Bowman',
      health: 100,
      level: 1,
    };
    expect(character).toMatchObject(result);
  });

  test('levelUp an alive character', () => {
    const bowman = new Bowman('Test');
    bowman.levelUp();
    expect([
      bowman.attack,
      bowman.defence,
      bowman.health,
      bowman.level,
    ]).toEqual([30, 30, 100, 2]);
  });

  test('levelUp a dead character', () => {
    const bowman = new Bowman('Test');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrowError(
      new Error('you cannot level up a dead character'),
    );
  });

  test('damage(points)', () => {
    const bowman = new Bowman('Test');
    bowman.damage(100);
    expect([bowman.defence, bowman.health]).toEqual([25, 25]);
  });

  test('damage will not work when healt = 0', () => {
    const bowman = new Bowman('Test');
    bowman.health = 0;
    bowman.damage(100);
    expect(bowman.health).toEqual(0);
  });

  test('too high damage, health level should be 0', () => {
    const bowman = new Bowman('Test');
    bowman.damage(1000);
    expect(bowman.health).toEqual(0);
  });
});
