import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Results from "./Results";

export default function SearchEngine() {
  let [searchWord, setSearchWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
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

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your word"
          autoFocus={true}
          onChange={updateWord}
        />
        <input type="submit" value="search" className="btn btn-primary w-30" />
      </form>
      <Results results={results} />
    </div>
  );
}
