interface Subject{
    registerObserver(o: Observer):void;
    removeObserver(o: Observer):void;
    notifyObservers():void;
}
interface Observer{
    update(temp:number, humidity:number, pressure:number):void;
}

interface DisplayElement{
    display():void;
}

class WeatherData implements Subject{
    private observers:Observer[];
    private temperature:number;
    private humidity:number;
    private pressure:number;

    registerObserver(o: Observer):void{
        this.observers.push(o)
    }

    removeObserver(o: Observer):void{
        const i:number = this.observers.indexOf(o);
        if ( i >= 0 ){
            this.observers.splice(i, 1);
        }
    }

    notifyObservers():void{
        for(let i=0; i < this.observers.length; i++){
            let observer:Observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged():void{
        this.notifyObservers()
    }

    setMeasurements(temperature: number, humidity: number, pressure: number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    constructor(){
        this.observers = [];
    }
}

class CurrentConditionsDisplay implements Observer, DisplayElement{
    temperature: number;
    humidity: number;
    weatherData: Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temp:number, humidity:number, pressure:number):void{
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }

    display():void{
        console.log(`Current conditions: ${this.temperature}C degrees and ${this.humidity}% humidity`);
    }
}

let weatherData:WeatherData = new WeatherData();

let currentConditionsDisplay:CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4)
weatherData.setMeasurements(80, 65, 25)
weatherData.setMeasurements(80, 65, 16.5)