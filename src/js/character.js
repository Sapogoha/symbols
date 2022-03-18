export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('type of name must be a string');
    }
    if (name.length < 2) {
      throw new Error('name must be longer than 2 characters');
    }
    if (name.length > 10) {
      throw new Error('name must be shorter than 10 characters');
    } else {
      this.name = name;
    }

    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (typeof type !== 'string') {
      throw new Error('type of type must be a string');
    }
    if (types.indexOf(type) === -1) {
      throw new Error(`type must be one of those 6: ${types}`);
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('you cannot level up a dead character');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
