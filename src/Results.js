import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Images from "./Images";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
        <div>
          <Images imageData={props.imageData} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
