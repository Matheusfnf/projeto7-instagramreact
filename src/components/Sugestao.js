import React from "react";
import "../components/styles.css";

export default function Sugestao(props) {
  return (
    
      <div className="caixa-perfil">
        <img src={props.img} />
        <div className="palavras">
          <p className="nome">{props.nome}</p>
          <p className="status-segue">Segue você</p>
        </div>
        <div className="Seguir">
          <h5>Seguir</h5>
        </div>
      </div>
    
  );
}
