import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Results from "./Results";

export default function SearchEngine(props) {
  let [searchWord, setSearchWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateWord(event) {
    setSearchWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <h1>What do you want to search?</h1>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={updateWord}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
