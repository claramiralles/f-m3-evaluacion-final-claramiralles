import React, {Component} from 'react';
import Filters from '../Filters/Filters';
import CharacterList from '../CharacterList/CharacterList';
// import PropTypes from 'prop-types';

const Home = props => {

    const {match, people, name, onSearch} = props;

    return (
       <div>
        <Filters 
            onSearch ={onSearch}
            name={name}
        />
        
        <CharacterList 
            people={people.filter(character => 
            character.name.includes(name))}
            name={name}
            onSearch={onSearch}
        />
        </div>
    )
}

export default Home;