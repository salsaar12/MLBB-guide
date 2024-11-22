import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function HeroDetail() {
  const [hero, setHero] = useState();
  const { heroId } = useParams();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(`https://api.dazelpro.com/mobile-legends/hero/${heroId}`);
        if (response.status === 200 && response.data.hero) {
          setHero(response.data.hero);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchHero();
  }, [heroId]);

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero">
      <h1>Hero Detail - {hero[0].hero_name}</h1>
      {hero.map((h) => (
        <div key={h.hero_id} className="hero-detail">
          <img
            src={`/images/${h.hero_name.toLowerCase()}.jpg`}
            alt={h.hero_name}
            className="hero-image"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if default image is missing
              e.target.src = "/images/default-hero.jpg"; // Display default image if hero image not found
            }}
          />
          <p>Hero ID: {h.hero_id}</p>
          <p>Hero Name: {h.hero_name}</p>
          <p>Hero Ability: {h.hero_overview.hero_ability}</p>
          <p>Hero Difficulty: {h.hero_overview.hero_difficulty}</p>
          <p>Hero Durability: {h.hero_overview.hero_durability}</p>
          <p>Hero Offense: {h.hero_overview.hero_offence}</p>
          <p>Hero Role: {h.hero_role}</p>
          <p>Hero Specialty: {h.hero_specially}</p>
        </div>
      ))}
    </div>
  );
}
