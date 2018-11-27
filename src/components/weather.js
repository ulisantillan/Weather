import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div>
                {
                    this.props.country && this.props.city && <p>Location:
                        <span>  {this.props.city}, {this.props.country}</span>
                    </p>
                }

                {
                    this.props.error && <p>{this.props.error}</p>
                }

            </div>
        )
    }
}

export default Weather;
