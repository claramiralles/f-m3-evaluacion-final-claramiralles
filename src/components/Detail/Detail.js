import React, { Component } from 'react';
import './Detail.scss'
import { Link } from 'react-router-dom';

class Detail extends Component {
 
  render() {
    // const {name, actor, image, house, dateOfBirth, ancestry, eyeColour, hairColour, patronus, alive} = this.props.character;
    const {isLoading} = this.props;
    return (
      <div>
        {isLoading

        ? (<p>Loading...</p>)

        : (<div className = "detail-page__container">
          <Link to="/" className = "detail-page__link" >Back</Link>
          <div className = "detail-page__subcontainer">
            <h1>{this.props.character.name}</h1>
            <h2>Played by {this.props.character.actor}</h2>
            <img className = "detail-page__image" src={this.props.character.image} alt={this.props.character.name}/> 
            <section className = "detail-page__text-container">
            <p className = "detail-page__text"> 
                <span>{this.props.character.name}</span> is a member of the <span className = "detail-page__characteristic">{this.props.character.house}</span> house.
            </p>
            <p className = "detail-page__text">
                Born on <span className = "detail-page__characteristic">{this.props.character.dateOfBirth}</span>, of <span className = "detail-page__characteristic">{this.props.character.ancestry}</span> ancestry, this character has <span className = "detail-page__characteristic">{this.props.character.eyeColour}</span> eyes and <span className = "detail-page__characteristic">{this.props.character.hairColour}</span> hair.
            </p>
            <p className = "detail-page__text"> {!this.props.character.patronus ? 'There is no patronus'
                            : `When ${this.props.character.name} takes the wand to invoke the Patronus Charm, an amazing ${this.props.character.patronus} appears to protect our beloved character.`
                }
            </p> 
            <p className = "detail-page__text"> {this.props.character.alive === true ? `${this.props.character.name} is still alive.`
                            : `${this.props.character.name} has unfortunately deceased.`
                }
            </p> 
            </section>
          </div>)
        </div> )}
    </div>)
  }
}

export default Detail;