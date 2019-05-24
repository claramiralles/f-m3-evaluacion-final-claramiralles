import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Card = props => {

    const {name, img, house,} = props;

    return (
        <article>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{house}</p>
        </article>
    )
}
Card.propTypes = { 
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
}
export default Card;