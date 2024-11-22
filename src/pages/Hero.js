import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/searchbar.js"; 

const api = "https://api.dazelpro.com/mobile-legends/hero";

export default function Hero(props) {
  const [heroList, setHeroList] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const { history } = props;

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(api);
        if (response.status === 200) {
          setHeroList(response.data.hero);
          setFilteredHeroes(response.data.hero); 
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchHero();
  }, []);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);

    // Perform filtering based on the search term
    const filtered = heroList.filter((hero) => hero.hero_name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Update the filteredHeroes state with the search results
    setFilteredHeroes(filtered);
  };

  return (
    <div className="hero">
      <h1>Mobile Legends Hero</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="hero-container">
        {filteredHeroes.length === 0
          ? "No heroes found."
          : filteredHeroes.map((h) => (
              <div key={h.hero_id}>
                {/* <img src={h.hero_avatar} alt={`gambar ${h.hero_name}`} /> */}
                <NavLink to={`/hero/${h.hero_id}`} onClick={() => history.push(`/hero/${h.hero_id}`)} className="link">
                  <p>{h.hero_name}</p>
                </NavLink>
              </div>
            ))}
      </div>
    </div>
  );
}
