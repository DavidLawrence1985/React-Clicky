import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title">
    <h1 id="main-title">CLicky Game{props.children}</h1>
    <p id="rules">Click an image you have not already clicked to score a point. If you have already clicked the image you lose!</p>
    <h3 id="score">Score: {props.count}</h3>
  </div>

  )
}

export default Title;
