import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.scss'

const CharacterCard = props => {

    const {name, img, house,} = props;

    return (
        <div>
        <article className = "card__container">
            <h2 className = "name">{name}</h2>
            <div className = "image__container">
                <img src={img} alt={name} className="image"/>
            </div>
            <p>{house}</p>
        </article>
        </div>
    )
}
CharacterCard.propTypes = { 
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
}
export default CharacterCard;