import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <br />
        <strong>Synonyms: </strong>
        {props.synonyms.join(", ")}
      </div>
    );
  } else {
    return null;
  }
}
