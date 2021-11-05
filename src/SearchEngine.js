import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [searchWord, setSearchWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);
  }

  function updateWord(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter your word"
          autoFocus={true}
          onChange={updateWord}
        />
        <input type="submit" value="search" className="btn btn-primary w-30" />
      </form>
    </div>
  );
}
