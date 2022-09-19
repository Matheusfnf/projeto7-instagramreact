import React, { useState } from "react";
import "../components/styles.css";
import { FaPen } from "react-icons/fa";
import catanacomis from "../images/download (9).png";

export default function Usuario() {
  const [nome, setNome] = useState("Catana");
  const [foto, setFoto] = React.useState(catanacomis);

  const prompterro = () => {
    const erro = prompt("seu nome");
    if (erro === "" || erro === null) {
      return alert("Não sabemos seu nome");
    }
    return setNome(erro);
  };

  return (
    <>
      <div className="sidebar-topo">
        <img
          className="fotoescolhida"
          onClick={() => setFoto(prompt("Insira um URL de uma foto"))}
          src={foto}
        />
        <div className="username">
          <span>
            <p>{nome}</p>
            <FaPen onClick={() => prompterro()} cursor={"pointer"} />
          </span>
          <p>@{nome}</p>
        </div>
      </div>
    </>
  );
}
