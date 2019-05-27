import React, { Component } from 'react';
import './Detail.scss'
import { Link } from 'react-router-dom';

class Detail extends Component {
 
  render() {
    const {name, actor, image, house, dateOfBirth, ancestry, eyeColour, hairColour, patronus, alive} = this.props.character;
   
    return (
      <div className = "detail-page__container">
        <Link to="/" className = "detail-page__link" >Back</Link>
      <div className = "detail-page__subcontainer">
        <h1>{name}</h1>
        <h2>Played by {actor}</h2>
        <img className = "detail-page__image" src={image} alt={name}/> 
        <section className = "detail-page__text-container">
        <p className = "detail-page__text"> 
            <span>{name}</span> is a member of the <span className = "detail-page__characteristic">{house}</span> house.
        </p>
        <p className = "detail-page__text">
            Born on <span className = "detail-page__characteristic">{dateOfBirth}</span>, of <span className = "detail-page__characteristic">{ancestry}</span> ancestry, this character has <span className = "detail-page__characteristic">{eyeColour}</span> eyes and <span className = "detail-page__characteristic">{hairColour}</span> hair.
        </p>

         <p className = "detail-page__text"> {!patronus ? 'There is no patronus'
                        : `When ${name} takes the wand to invoke the Patronus Charm, an amazing ${patronus} appears to protect our beloved character.`
            }
        </p> 

        <p className = "detail-page__text"> {alive === true ? `${name} is still alive.`
                        : `${name} has unfortunately deceased.`
            }
        </p> 
        
        </section>
       
      </div>
      </div>
    );
  }
}

export default Detail;