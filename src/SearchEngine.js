import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [searchWord, setSearchWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
  }

  function updateWord(event) {
    setSearchWord(event.target.value);
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiURL).then(handleResponse);
    console.log(apiURL);
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
