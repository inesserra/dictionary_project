import "./App.css";
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <SearchEngine />
        <footer>
          <a href="https://github.com/inesserra/dictionary_project">
            Open source code
          </a>{" "}
          by Ines Serra
        </footer>
      </div>
    </div>
  );
}

export default App;
