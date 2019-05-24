import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
 
  render() {
    const {name, image, house, } = this.props.character;
   
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Detail of {name}</h1>

        <img src={image} alt={name} /> 
        <h2>{house}</h2>
      </div>
    );
  }
}

export default Detail;