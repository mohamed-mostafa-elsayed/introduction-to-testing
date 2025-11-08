import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

const firstName = "mohammed";
const lastName = "mostafa";
const role = "eng";

describe('Character', () => {

  let character;

  beforeEach(() => {

    character = new Character(firstName, lastName, role);
  });

  it(
    'should create a character with a first name, last name, and role', () => {

      //first way

      expect(character.firstName).toBe(firstName);
      expect(character.lastName).toBe(lastName);
      expect(character.role).toBe(role);

      //another way to be more clear
      //use expect.objectContaining

      expect(character).toEqual(expect.objectContaining({
        firstName,
        lastName,
        role,
      }));

      //how to conrtol of random number
      //you can add any property like this way

      expect(character).toEqual({
        firstName,
        lastName,
        role,
        strength: expect.any(Number),
        charisma: expect.any(Number),
        constitution: expect.any(Number),
        dexterity: expect.any(Number),
        intelligence: expect.any(Number),
        wisdom: expect.any(Number),
        level: 1,
        lastModified: expect.any(Date),
        createdAt: expect.any(Date),
        id: expect.stringContaining("person-")

      });

    },
  );

  it('should allow you to increase the level', () => {

    const initialLevel = character.level;

    character.levelUp();

    expect(character.level).toBe(2);

    //another way

    expect(character.level).toBeGreaterThan(initialLevel);

  });

  it('should update the last modified date when leveling up', () => {

    const intialLastModified = character.lastModified;

    character.levelUp();

    expect(character.last).not.toBe(intialLastModified);
   });
});
