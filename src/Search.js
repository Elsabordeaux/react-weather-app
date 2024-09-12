import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <header className="Search">
      <form class="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          class="search-input"
          id="search-input"
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
    </header>
  );
}
