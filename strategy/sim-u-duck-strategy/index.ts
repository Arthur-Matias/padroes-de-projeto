import DecoyDuck from "./src/decoy-duck";
import MallardDuck from "./src/mallard-duck";
import RedheadDuck from "./src/RedheadDuck";
import RubberDuck from "./src/RubberDuck";
import ModelDuck from "./src/model-duck";
import { FlyNoWay, FlyWithRocket, FlyWithWings } from "./src/fly";
import { MuteQuack, Squeak } from "./src/quack";

const mallardDuck = new MallardDuck();
const redheadDuck = new RedheadDuck();
const rubberDuck = new RubberDuck();

const woodenDuck = new DecoyDuck();
const modelDuck = new ModelDuck();

// Remove ALL comments to see the whole log

function runMallard(){
    mallardDuck.display();
    mallardDuck.performFly();
    mallardDuck.performQuack();
    mallardDuck.swim();
}
function runRedHead(){
    redheadDuck.display();
    redheadDuck.performFly();
    redheadDuck.performQuack();
    redheadDuck.swim();
}
function runRubber(){
    rubberDuck.setFlyBehaviour(new FlyNoWay());
    rubberDuck.setQuackBehaviour(new Squeak());
    rubberDuck.display();
    rubberDuck.performQuack();
    rubberDuck.performFly();
    rubberDuck.swim();
}
function runDecoy(){
    woodenDuck.setFlyBehaviour(new FlyNoWay());
    woodenDuck.setQuackBehaviour(new MuteQuack());
    woodenDuck.display();
    woodenDuck.swim();
    woodenDuck.performFly();
    woodenDuck.swim();
}
function runModelDuck(){
    modelDuck.display();
    modelDuck.swim();
    modelDuck.performFly();
    modelDuck.swim();

    console.log()
    console.log('changing')
    console.log()

    modelDuck.setFlyBehaviour(new FlyWithRocket())
    modelDuck.performFly()
}

// console.log('Mallard-------------------------------------------------------')
// console.log()
// runMallard()
// console.log()
// console.log('Redhead-------------------------------------------------------')
// console.log()
// runRedHead()
// console.log()
// console.log('Rubber-------------------------------------------------------')
// console.log()
// runRubber()
// console.log()
// console.log('Decoy-------------------------------------------------------')
// console.log()
// runDecoy()
console.log()
console.log('Model-------------------------------------------------------')
console.log()
runModelDuck()