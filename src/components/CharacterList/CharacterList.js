import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';

const List = props => {
    return (


        <ul>
        {props.people.map(character => (
          <li key={character.name}>
            <Link to={`/character-detail/${character.id}`}>I want to know more about {character.name}!</Link>
          
            <CharacterCard
                    name = {character.name}
                    img = {character.image}
                    house = {character.house}
                />
          </li>
        ))}
      </ul>




        // <ul> 
        //     {props.people.map(item =>{
        //         return <li key={item.name}>
        //         <Card 
        //             name = {item.name}
        //             img = {item.image}
        //             house = {item.house}
                   
        //         />
        //         </li>
        //     })}
        // </ul>
    )
}

List.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List;