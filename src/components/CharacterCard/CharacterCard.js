import React from 'react';
import './CharacterCard.scss'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CharacterCard = props => {

    const {name, image, house, id} = props;

    return (
        <article className = "card__container">
            <Link 
                to = {`/character-detail/${id}`} 
                className = "link"
            >
                <h2 className = "name">
                    {name}
                </h2>
                <div className = "image__container">
                    <img 
                        className = "image"
                        src={image} 
                        alt={name} 
                    />
                </div>
                <h3>
                    {house ? house : 'Hogwarts'}
                </h3>
            </Link>
        </article>
    )
}
CharacterCard.propTypes = { 
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
}
export default CharacterCard;