import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";
import { Container } from 'reactstrap';

const Api_Key = "b2bb901c7293cdfaa25ad966378aa558";

class App extends React.Component{

  state = {
    temperature: undefined,
    pressure: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }

  //function to call api
  getWeather = async (e) => {
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  const response = await api_call.json();
  console.log(response);
  if(city && country){
    this.setState({
      temperature: Math.round((response.main.temp) - 273.15) + "° C" + " ~ " +(Math.round(((response.main.temp) -273.15)*1.8)+32) + "° F",
      pressure: response.main.pressure + " "+ "mb",
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity + "%",
      description: response.weather[0].description,
      wind: response.wind.speed,
      error: ""
    })

  }else{
    this.setState({
      error: "Please input search values..."
    })
  }
}
   render(){
    return(
      <div>
      <div className="background">
        <Container >
          <Titles />
          <Form loadWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            pressure={this.state.pressure}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            wind={this.state.wind}
            error={this.state.error}
          />
        </Container>
        </div>
      </div>
   )
  }
}
export default App;
