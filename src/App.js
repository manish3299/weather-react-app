import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import FORM from './components/form'
import Weather from './components/weather'


const api_key ='d89378d045e9ecfda6ac7b7bca08484c';

//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      description: "",
      temp_max:undefined,
      temp_min:undefined,
      error:false
    };

  }

  calCelsius(temp){
    return Math.floor(temp-273.15);
  }

get_weatherIcons(icons,rangeID){
  switch(true){
    case rangeID>=200 && rangeID<=232:
      this.setState({icon:this.weatherIcon.Thunderstorm});
      break;
    case rangeID>=300 && rangeID<=321:
      this.setState({icon:this.weatherIcon.Drizzle});
      break;
    case rangeID>=500 && rangeID<=532:
      this.setState({icon:this.weatherIcon.Rain});
      break;
    case rangeID>=600 && rangeID<=632:
      this.setState({icon:this.weatherIcon.Snow});
      break;
    case rangeID>=700 && rangeID<=781:
      this.setState({icon:this.weatherIcon.Atmosphere});
      break;
    case rangeID === 800:
      this.setState({icon:this.weatherIcon.Clear});
    case rangeID>=801 && rangeID<=804:
      this.setState({icon:this.weatherIcon.Clouds});
      break;
    default:
      this.setState({icon:this.weatherIcon.Clouds});

  }
}


  getWeather = async(e)=>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city&&country){

      const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const response = await api_call.json();

    this.setState({
      city: `${response.name},${response.sys.country}`,
      celsius: this.calCelsius(response.main.temp),
      temp_min: this.calCelsius(response.main.temp_min),
      temp_max: this.calCelsius(response.main.temp_max),
      description: response.weather[0].description
    });

    this.get_weatherIcons(this.weatherIcon,response.weather[0].id);
    } 
    else{
      this.setState({
        error: true
      });
    }


  };

    
  

  render(){
    return(
      <div className="App">
        <h1>WEATHER APP</h1>
        <FORM loadweather={this.getWeather} error={this.state.error}></FORM>
        <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius} temp_min={this.state.temp_min} temp_max={this.state.temp_max} desc={this.state.description} weatherIcon={this.state.icon}></Weather>
     </div>
    );
  }
}


export default App;
