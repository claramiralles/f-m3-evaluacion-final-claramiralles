import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Detail from '../Detail/Detail';

const CharacterCard = props => {

    const {name, img, house,} = props;

    return (
        <div>
        <article>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
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