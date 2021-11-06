import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="type">{props.meaning.partOfSpeech}</h3> <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition: </strong> {definition.definition}
            </div>
            <div className="example">
              <br />
              <em> {definition.example}</em>
            </div>
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
