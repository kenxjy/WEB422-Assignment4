import React, { Component } from 'react';
import MainContainer from '../MainContainer/MainContainer';
import obiwan from '../images/obi-wan.jpg';

class NotFound extends Component {
  render() {
    return (
      <MainContainer>
        <h1 className="page-header">Not Found</h1>
        <div className="row">
          <img src={obiwan} alt="Not Found" />
          <br/><br/>
          <strong>This is not the page you are looking for.</strong>
        </div>
      </MainContainer>
    );
  }
}

export default NotFound;