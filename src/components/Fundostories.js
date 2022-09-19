import React from "react";
import "../components/styles.css";
import fundostories from "../images/download (8).png";

export default function FundoStorie(props) {
  return (
    <div className="stories">
      <div className="img-stories">
        <img className="fundo-storie" src={fundostories} />
        <img className="img-storie" src={props.img} />
      </div>

      <p>{props.titulo}</p>
    </div>
  );
}
