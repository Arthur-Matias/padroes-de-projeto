import Duck from './duck';
import { FlyNoWay } from './fly';
import { Squeak } from './quack';

export default class RubberDuck extends Duck{
    flyBehaviour = new FlyNoWay();
    quackBehaviour = new Squeak();
    display(){
        console.log('Parece um pato de borracha')
    }
}