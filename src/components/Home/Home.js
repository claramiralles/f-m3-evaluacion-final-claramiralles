import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";
import House from "../Houses/House";
import Ancestry from "../Ancestry/Ancestry";
import Eyes from "../Eyes/Eyes";

const Home = props => {
  const { people, name, onSearch, onSearchHouses, onSearchAncestry, onSearchEyes} = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <House onSearchHouses = {onSearchHouses}/>

      <Ancestry  onSearchAncestry = { onSearchAncestry } />

      <Eyes onSearchEyes = {onSearchEyes} />


      <CharacterList
        people = {people}
      />
    </div>
  );
};

export default Home;
