import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Zombie from '../zombie';
import Team from '../team';

const team = new Team();
const characterA = new Bowman('TestA');
const characterB = new Daemon('TestB');
const characterC = new Magician('TestC');
const characterD = new Zombie('TestD');

test('add(member) method - add one member', () => {
  team.add(characterA);
  expect(team.members).toContain(characterA);
  expect(team.members.size).toBe(1);
});

test('add(member) method - adding already existing member, exect error', () => {
  expect(() => team.add(characterA)).toThrow(Error);
});

test('addAll(...members) method - add several members', () => {
  team.addAll(characterB, characterC, characterD);
  expect(team.members).toContain(characterB, characterC, characterD);
  expect(team.members.size).toBe(4);
});

test('toArray() method - returns an array of members', () => {
  expect(team.toArray()).toEqual([
    characterA,
    characterB,
    characterC,
    characterD,
  ]);
});

test.each([
  [0, characterA],
  [1, characterB],
  [2, characterC],
  [3, characterD],
])('testing [Symbol.iterator] with param %s', (number, result) => {
  expect([...team][number]).toBe(result);
});
