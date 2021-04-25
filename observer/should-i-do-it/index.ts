interface Subject{
    registerObserver(o: Observer):void;
    removeObserver(o: Observer):void;
    notifyObservers():void;
}
interface Observer{
    update():void;
}

class SwingObserverExample implements Subject{
    observers: Observer[];

    registerObserver(o:Observer):void {
        this.observers.push(o)
    }

    removeObserver(o:Observer):void {
        const index = this.observers.indexOf(o);
        if( index >= 0 ){
            this.observers.splice(index, 1);
        } 
    }

    notifyObservers():void{
        this.observers.map(o=>{
            o.update();
        })
    }

    click():void{
        this.notifyObservers();
    }

    constructor(){
        this.observers = [];
    }

}

class DevilObserver implements Observer{
    answers = ['yes', 'no']
    

    update(){
        let num = Math.round(Math.random() * 2);
        if( num > 0 ){
            console.log(`The devil says: ${this.answers[num]}`);
        }
    }
}

class AngelObserver implements Observer{
    answers = ['yes', 'no']
    

    update(){
        let num = Math.round(Math.random() * 2);
        if( num > 0 ){
            console.log(`The angel says: ${this.answers[num]}`);
        }
    }
}

const swingObserverExample:SwingObserverExample = new SwingObserverExample();
const Devil:DevilObserver = new DevilObserver();
const Angel:AngelObserver = new AngelObserver();

swingObserverExample.registerObserver(Devil)
swingObserverExample.registerObserver(Angel)

swingObserverExample.click();
swingObserverExample.click();
swingObserverExample.click();
swingObserverExample.click();
swingObserverExample.click();