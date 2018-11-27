import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";
import Titles from "./components/titles";


class App extends React.Component{
   render(){
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
   )
  }
}
export default App;
