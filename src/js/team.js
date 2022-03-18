export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('this member has been added earlier');
    }
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let current = 0;
    const last = members.length;

    return {
      next() {
        if (current < last) {
          const character = members[current];
          current += 1;
          return {
            done: false,
            value: character,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
