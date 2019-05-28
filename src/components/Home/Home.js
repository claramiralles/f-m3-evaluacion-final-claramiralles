import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";
import HousesText from "../HousesText/HousesText";

const Home = props => {
  const { people, onSearch, name, onSearchHousesText, housesText } = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <HousesText onSearchHousesText = {onSearchHousesText} housesText = {housesText} />

      <CharacterList
        people = {people}
      />
    </div>
  );
};

export default Home;
