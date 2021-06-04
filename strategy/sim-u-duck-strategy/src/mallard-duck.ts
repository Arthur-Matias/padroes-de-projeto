import Duck from './duck';
import { FlyWithWings } from './fly';
import { Quack } from './quack'

export default class MallardDuck extends Duck{
    flyBehaviour:FlyWithWings = new FlyWithWings();
    quackBehaviour: Quack = new Quack();
    display():void {
        console.log("I'm a real Mallard duck");
    }
}