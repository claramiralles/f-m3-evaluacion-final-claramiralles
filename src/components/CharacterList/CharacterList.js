import React from "react";
import "./CharacterList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard/CharacterCard";


const CharacterList = props => {
  return (
    <ul className = "list">
      {props.people.map(character => (
        <li 
          key = {character.name} 
          className = "list__item"
        >
            <CharacterCard
              name = {character.name}
              image = {character.image}
              house = {character.house} 
              id = {character.id}
            />

            <div className = "link__container">
              <Link 
                to = {`/character-detail/${character.id}`} 
                className = "link-more"
              >
                More about {character.name}
              </Link>
            </div>

        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterList;
