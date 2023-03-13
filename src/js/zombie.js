import Character from './character';

export default class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
        this.type = type;
        this.attack = 40;
        this.defence = 10;
    }
}
