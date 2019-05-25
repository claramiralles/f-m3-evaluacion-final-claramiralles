import React, {Component} from 'react';
import Filters from '../Filters/Filters';
import CharacterList from '../CharacterList/CharacterList';
// import PropTypes from 'prop-types';

const Home = props => {

    const {match, people, name, onSearch} = props;

    return (
       <div>
        {/* <Filters 
            onInputChange ={this.handlerUpdateValue}
            nameValue={nameValue}
        /> */}
        
        <CharacterList 
            people={people}
            //     filter(character => 
            // character.name.includes(this.state.filter.name))}
            name={name}
            onSearch={onSearch}
        />
        </div>
    )
}

export default Home;