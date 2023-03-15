export default class Character {
    constructor(name, type) {
        if (name.length > 2 && name.length < 10) {
            this.name = name;
        } else {
            throw new Error('Name must be 2-10 symbols!');
        }
        if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            this.type = type;
        } else {
            throw new Error('Incorrect character type!');
        }
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    upLevel() {
        if (this.health !== 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw Error('Нельзя повысить левел умершего');
        }
    }

    damage(points) {
        if ((points * (1 - this.defence / 100)) > this.health) {
            this.health = 0;
        } else {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
