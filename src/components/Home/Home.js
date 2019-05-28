import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";
import House from "../Houses/House";

const Home = props => {
  const { people, name, onSearch, onSearchHouses } = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <House onSearchHouses = {onSearchHouses}/>

      <CharacterList
        people = {people}
      />
    </div>
  );
};

export default Home;
