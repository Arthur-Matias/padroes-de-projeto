// Necessário para poder rodar o código

class Display{
    update(temp:number, humidity:number, pressure:number){
        console.log(`Current temp: ${temp} \n Current Humidity: ${humidity} \n Current pressure: ${pressure}`)
    }
}

const currentConditionsDisplay = new Display();
const statisticsDisplay = new Display();
const forecastDisplay = new Display();


class WeatherData{
    getPressure(): number {
        console.log();
        console.log("Method not implemented.");
        console.log();

        return 5.6
    }
    getHumidity(): number {
        console.log();
        console.log("Method not implemented.");
        console.log();

        return 0.8
    }
    getTemperature(): number {
        console.log();
        console.log("Method not implemented.");
        console.log();

        return 16
    }
    
    // Código do livro--------------------------------
    
    measurementsChanged():void{
        let temp: number = this.getTemperature();
        let humidity: number = this.getHumidity();
        let pressure: number = this.getPressure();
        
        currentConditionsDisplay.update(temp, humidity, pressure)
        statisticsDisplay.update(temp, humidity, pressure);
        forecastDisplay.update(temp, humidity, pressure);
    }

    //outros métodos


}