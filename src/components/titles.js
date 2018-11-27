import React from "react";
import { Container } from 'reactstrap';

class Titles extends React.Component {

    render() {

        return (

            <div>
              <Container className="containerBox">
                <h1 className="title">Crazy Weather</h1>
                <p className="title2"> When It's Crazy We Have The Weather...  </p>
              </Container>
            </div>
        )
    }
}

export default Titles;
