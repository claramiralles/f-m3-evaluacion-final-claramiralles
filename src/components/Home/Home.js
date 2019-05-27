import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";

const Home = props => {
  const { people, name, onSearch } = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <CharacterList
        people = {people.filter(character =>
          character.name.toUpperCase().includes(name.toUpperCase())
        )}
      />
    </div>
  );
};

export default Home;
