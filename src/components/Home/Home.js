import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";
import Ancestry from "../Ancestry/Ancestry";

const Home = props => {
  const { people, name, onSearch, ancestry, onSearchAncestry } = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <Ancestry ancestry = {ancestry}
                  onSearchAncestry = {onSearchAncestry}/>

      <CharacterList
        people = {people}
      />
    </div>
  );
};

export default Home;
