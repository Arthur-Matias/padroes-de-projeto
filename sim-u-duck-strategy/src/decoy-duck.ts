import Duck from "./duck";
import { FlyNoWay } from "./fly";
import { MuteQuack } from "./quack";

export default class DecoyDuck extends Duck{
    flyBehaviour = new FlyNoWay();
    quackBehaviour = new MuteQuack();
    display(){
        console.log('Parece um pato que não existe')
    }
}