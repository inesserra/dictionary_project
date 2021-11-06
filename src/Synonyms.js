import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        <em>{props.synonyms.join(", ")}</em>
      </div>
    );
  } else {
    return null;
  }
}
