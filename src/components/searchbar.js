import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Menggunakan prop onSearch untuk memberi tahu parent komponen bahwa pencarian dilakukan
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" placeholder="Cari..." value={searchTerm} onChange={handleSearchChange} />
      <button type="submit">Cari</button>
    </form>
  );
};

export default SearchBar;
