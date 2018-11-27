import React from "react";
import { Container } from 'reactstrap';

class Weather extends React.Component{

    render(){

        return(

            <div>
            <Container>
            <Container className="locationContainer">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location:
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                    </p>
                }
            </Container>
            <Container className="tempContainer">
                {
                    this.props.temperature && <p className="weather__key">Temperature:
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }
            </Container>
            <Container className="pressureContainer">
                {
                    this.props.pressure && <p className="weather__key">Pressure:
                        <span className="weather__value">  {this.props.pressure}</span>
                    </p>
                }
            </Container>
            <Container className="humidityContainer">
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }
            </Container>
            <Container className="conditionsContainer">

                {
                    this.props.description && <p className="weather__key">Conditions:
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }
            </Container>
            <Container className="windContainer">
                {
                    this.props.wind && <p className="weather__key">Wind Speed:
                        <span className="weather__value">  {this.props.wind}</span>
                    </p>
                }
            </Container>

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
              </Container>
            </div>
        )
    }
}

export default Weather;
