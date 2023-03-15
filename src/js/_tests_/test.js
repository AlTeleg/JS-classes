import Character from '../character';
import Zombie from '../zombie';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Bowman from '../bowman';
import Undead from '../undead';

describe('Character', () => {
    const character = new Character('cha1', 'Zombie');

    test('test type of methods to be function', () => {
        expect(typeof character.upLevel).toBe('function');
        expect(typeof character.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(character.upLevel()).toBeUndefined();
        expect(character.damage()).toBeUndefined();
    });

    test('name test', () => {
        try {
            throw new Error('Name must be 2-10 symbols!');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Name must be 2-10 symbols!');
        }
        const error = () => {
            throw new Error('Name must be 2-10 symbols!');
        };
        expect(error).toThrow(Error);
        expect(error).toThrow('Name must be 2-10 symbols!');
        expect(() => {
            const character2 = new Character('c', 'Zombie');
            character2.constructor('c', 'Zombie');
        }).toThrow(Error);
        expect(() => {
            const character2 = new Character('c', 'Zombie');
            character2.constructor('c', 'Zombie');
        }).toThrow('Name must be 2-10 symbols!');
    });

    test('type test', () => {
        try {
            character.constructor('ch1', 'UnknownType');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Incorrect character type!');
        }
    });

    test('upLevel test', () => {
        try {
            character.health = 0;
            character.upLevel();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Нельзя повысить левел умершего');
        }
    });

    test('dmg test', () => {
        character.damage(101);
        expect(character.health).toBe(0);
    });
});

describe('Zombie', () => {
    const zombie = new Zombie('zom1', 'Zombie');

    test('test type of methods to be function', () => {
        expect(typeof zombie.upLevel).toBe('function');
        expect(typeof zombie.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(zombie.upLevel()).toBeUndefined();
        expect(zombie.damage()).toBeUndefined();
    });
});

describe('Daemon', () => {
    const daemon = new Daemon('dae1', 'Daemon');

    test('test type of methods to be function', () => {
        expect(typeof daemon.upLevel).toBe('function');
        expect(typeof daemon.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(daemon.upLevel()).toBeUndefined();
        expect(daemon.damage()).toBeUndefined();
    });
});

describe('Magician', () => {
    const magician = new Magician('mag1', 'Magician');

    test('test type of methods to be function', () => {
        expect(typeof magician.upLevel).toBe('function');
        expect(typeof magician.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(magician.upLevel()).toBeUndefined();
        expect(magician.damage()).toBeUndefined();
    });
});

describe('Swordsman', () => {
    const swordsman = new Swordsman('swo1', 'Swordsman');

    test('test type of methods to be function', () => {
        expect(typeof swordsman.upLevel).toBe('function');
        expect(typeof swordsman.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(swordsman.upLevel()).toBeUndefined();
        expect(swordsman.damage()).toBeUndefined();
    });
});

describe('Bowman', () => {
    const bowman = new Bowman('bow1', 'Bowman');

    test('test type of methods to be function', () => {
        expect(typeof bowman.upLevel).toBe('function');
        expect(typeof bowman.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(bowman.upLevel()).toBeUndefined();
        expect(bowman.damage()).toBeUndefined();
    });
});

describe('Undead', () => {
    const undead = new Undead('und1', 'Undead');

    test('test type of methods to be function', () => {
        expect(typeof undead.upLevel).toBe('function');
        expect(typeof undead.damage).toBe('function');
    });

    test('lvl up and dmg methods return undefined when called', () => {
        expect(undead.upLevel()).toBeUndefined();
        expect(undead.damage()).toBeUndefined();
    });
});
