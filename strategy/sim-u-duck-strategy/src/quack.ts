import { QuackBehaviour } from "./interfaces";

export class Quack implements QuackBehaviour{
    quack():void {
        console.log('quack')
    };
}

export class Squeak implements QuackBehaviour{
    quack():void{
        console.log('Squeak')
    }
}

export class MuteQuack implements QuackBehaviour{
    quack():void{
        console.log('<< silence >>')
    }
}