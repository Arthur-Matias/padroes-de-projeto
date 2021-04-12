import { FlyBehaviour } from "./interfaces"

export class FlyWithWings implements FlyBehaviour{
    fly():void{
        console.log('Flying with wings')
    };
}
export class FlyNoWay implements FlyBehaviour{
    fly():void{
        console.log("Cannot fly")
    };
}
export class FlyWithRocket implements FlyBehaviour{
    fly():void{
        console.log("Flying with a rocket")
    }
}