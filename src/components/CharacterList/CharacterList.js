import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.scss";

const List = props => {
  return (
    <ul className="list">
      {props.people.map(character => (
        <li key={character.name} className="list__item">
          <CharacterCard
            name={character.name}
            img={character.image}
            house={character.house}
          />
          <div className="link__container">
            <Link to={`/character-detail/${character.id}`} className="link">
              More about {character.name}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
