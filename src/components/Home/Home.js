import React from "react";
import Filters from "../Filters/Filters";
import CharacterList from "../CharacterList/CharacterList";
import House from "../Houses/House";
import Ancestry from "../Ancestry/Ancestry";
import Eyes from "../Eyes/Eyes";
import HousesText from "../HousesText/HousesText";

const Home = props => {
  const { people, onSearch, name, onSearchHouses, onSearchAncestry, onSearchEyes, onSearchHousesText, housesText} = props;

  return (
    <div>
      <header className = "title">
        <h1>"Harry Potter Characters"</h1>
      </header>

      <Filters onSearch = {onSearch} name = {name} />

      <HousesText onSearchHousesText = {onSearchHousesText} housesText = {housesText} />

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
