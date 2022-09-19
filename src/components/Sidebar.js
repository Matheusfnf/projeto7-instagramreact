import React from "react";
import "../components/styles.css";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Usuario />
        <Sugestoes />
        <div className="informaçoes-adicionais">
          <p className="sobre-ajuda">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma{" "}
          </p>
        </div>
        <div className="informaçoes-adicionais-2 ">
          <p className="ano-de-publicacao"> © 2021 INSTAGRAM DO FACEBOOK </p>
        </div>
      </div>
    </>
  );
}
