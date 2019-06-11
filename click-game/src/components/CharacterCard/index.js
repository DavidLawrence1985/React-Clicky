import React from "react";
import "./style.css";

function CharacterCard(props) {
  // console.log(props.clicked)
  return (
    <div className="card" onClick={props.handleClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      

    </div>
  );
}

export default CharacterCard;