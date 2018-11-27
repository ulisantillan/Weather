import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";

const Api_Key = "b2bb901c7293cdfaa25ad966378aa558";

class App extends React.Component{
  state = {
    city: undefined,
    country: undefined,
    error: undefined
  }
  //async method to call api
  getWeather = async (e) => {
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  const response = await api_call.json();
  console.log(response);
  if(city && country){
    this.setState({
      city: response.name,
      country: response.sys.country,
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
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
                />
      </div>
   )
  }
}
export default App;
