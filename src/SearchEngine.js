import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Results from "./Results";

export default function SearchEngine(props) {
  let [searchWord, setSearchWord] = useState(props.defaultWord);
  let [images, setImages] = useState(null);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  const pexelsApiKey =
    "563492ad6f917000010000019b41b3d8b6294370939be7933e69faf2";
  const headers = { Authorization: `Bearer ${pexelsApiKey}` };

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }
  function search(event) {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiURL).then(handleResponse);
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=8`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Results results={results} imageData={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
