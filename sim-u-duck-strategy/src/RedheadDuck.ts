import Duck from './duck';
import { FlyWithWings } from './fly';
import { Quack } from './quack';

export default class RedheadDuck extends Duck{
    flyBehaviour = new FlyWithWings();
    quackBehaviour = new Quack();
    display():void {
        console.log('Parece um cabeça-vermelha');
    }
}