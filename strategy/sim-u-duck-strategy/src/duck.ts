import { FlyBehaviour, QuackBehaviour } from "./interfaces"

export default class Duck{
    flyBehaviour: FlyBehaviour;
    quackBehaviour: QuackBehaviour;
    swim():void {
        console.log('duck swimming')
    }
    
    display():void {}

    performFly():void {
        this.flyBehaviour.fly();
    }
    performQuack():void{
        this.quackBehaviour.quack();
    }
    setFlyBehaviour(fb:FlyBehaviour):void{
        this.flyBehaviour = fb;
    }
    setQuackBehaviour(qb:QuackBehaviour):void{
        this.quackBehaviour = qb;
    }
    // outros metodos
}