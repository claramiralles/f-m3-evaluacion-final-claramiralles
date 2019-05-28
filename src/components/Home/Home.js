import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";
import Ancestry from "../Ancestry/Ancestry";

const Home = props => {
  const { people, name, onSearch, onSearchAncestry } = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <Ancestry  onSearchAncestry = { onSearchAncestry } />

      <CharacterList
        people = {people}
      />
    </div>
  );
};

export default Home;
