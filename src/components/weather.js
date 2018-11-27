import React from "react";
import { Container } from 'reactstrap';
import image1 from '../img/location.png';
import image2 from '../img/temp.png';
import image3 from '../img/pressure.png';
import image4 from '../img/wind.png';
import image5 from '../img/conditions.png';
import image6 from '../img/humidity.png';

class Weather extends React.Component{

    render(){

        return(

            <div>
            <Container>
            <Container className="locationContainer">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location:
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                        <img className="Img" alt='icon' src={image1}/>
                    </p>
                }
            </Container>
            <Container className="tempContainer">
                {
                    this.props.temperature && <p className="weather__key">Temperature:
                        <span className="weather__value">  {this.props.temperature}</span>
                        <img className="Img" alt='icon' src={image2}/>
                    </p>
                }
            </Container>
            <Container className="pressureContainer">
                {
                    this.props.pressure && <p className="weather__key">Pressure:
                        <span className="weather__value">  {this.props.pressure}</span>
                        <img className="Img1" alt='icon' src={image3}/>
                    </p>
                }
            </Container>
            <Container className="humidityContainer">
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}</span>
                        <img className="Img3" alt='icon' src={image6}/>
                    </p>
                }
            </Container>
            <Container className="conditionsContainer">

                {
                    this.props.description && <p className="weather__key">Conditions:
                        <span className="weather__value">  {this.props.description}</span>
                        <img className="Img2" alt='icon' src={image5}/>
                    </p>
                }
            </Container>
            <Container className="windContainer">
                {
                    this.props.wind && <p className="weather__key">Wind Speed:
                        <span className="weather__value">  {this.props.wind}</span>
                        <img className="Img1" alt='icon' src={image4}/>
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
