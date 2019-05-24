import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../CharacterCard/CharacterCard';

const List = props => {
    return (
        <ul> 
            {props.people.map(item =>{
                return <li key={item.name}>
                <Card 
                    name = {item.name}
                    img = {item.image}
                    house = {item.house}
                   
                />
                </li>
            })}
        </ul>
    )
}

List.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List;