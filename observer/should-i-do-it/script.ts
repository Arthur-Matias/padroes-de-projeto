const button = document.querySelector('button');
const angel = document.querySelector('#angel');
const devil = document.querySelector('#devil');

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
        let num = Math.floor(Math.random() *2);
          devil.textContent = `The devil says: ${this.answers[num]}`;
    }
}

class AngelObserver implements Observer{
    answers = ['yes', 'no']
    

    update(){
        let num = Math.floor(Math.random() *2);
          angel.textContent = `The angel says: ${this.answers[num]}`;
    }
}

const swingObserverExample:SwingObserverExample = new SwingObserverExample();
const Devil:DevilObserver = new DevilObserver();
const Angel:AngelObserver = new AngelObserver();

swingObserverExample.registerObserver(Devil)
swingObserverExample.registerObserver(Angel)

button.addEventListener('click', ()=>{
  angel.textContent = '';
  devil.textContent = '';
  swingObserverExample.click()
})