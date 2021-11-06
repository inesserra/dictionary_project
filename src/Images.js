import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.imageData) {
    return (
      <section className="Images">
        <div className="row">
          {props.imageData.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    alt={photo.src.photographer}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
