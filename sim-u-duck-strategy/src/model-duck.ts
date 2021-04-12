import Duck from "./duck";
import { FlyNoWay } from "./fly";
import { Quack } from "./quack";

export default class ModelDuck extends Duck{
    constructor(){
        super()
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new Quack();
    }
    display(){
        console.log("I'm a model duck")
    }
}