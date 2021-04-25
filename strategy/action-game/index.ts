interface WeaponBehaviour{
    useWeapon(): void;
}

class Character{
    weapon: WeaponBehaviour;
    private title: string;

    setWeapon(w: WeaponBehaviour){
        this.weapon = w;
    }

    fight = () => {
        console.log(`${this.title}---------------------------------------`)
        this.weapon.useWeapon();
    };
    private setTitle(t: string){
        this.title = t;
    }

    constructor(t: string){
        this.setTitle(t)
    }
}



class AxeBehaviour implements WeaponBehaviour{
    useWeapon(){
        console.log('Attacking with Axe')
    }
}
class BowAndArrowBehaviour implements WeaponBehaviour{
    useWeapon(){
        console.log('Attacking with bow and arrows')
    }
}
class SwordBehaviour implements WeaponBehaviour{
    useWeapon(){
        console.log('Attacking with Sword')
    }
}
class KnifeBehaviour implements WeaponBehaviour{
    useWeapon(){
        console.log('Attacking with Knife')
    }
}



const Queen = new Character('Queen');
Queen.setWeapon(new BowAndArrowBehaviour);
Queen.fight();

const Troll = new Character('Troll');
Troll.setWeapon(new AxeBehaviour)
Troll.fight();

const Knight = new Character('Knight');
Knight.setWeapon(new SwordBehaviour)
Knight.fight();

const King = new Character('King');
King.setWeapon(new KnifeBehaviour);
King.fight();
