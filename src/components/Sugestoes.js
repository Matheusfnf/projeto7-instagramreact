import React from "react";
import { AiFillAmazonCircle, AiOutlineSmallDash } from "react-icons/ai";
import "../components/styles.css";
import chill from "../images/download (10).png";
import Sugestao from "./Sugestao";
import Dart from "../images/download (11).png";
import razoes from "../images/download (12).png";
import adorable from "../images/download (13).png";
import cutecats from "../images/download (14).png";

export default function Sugestoes() {
  const Suggest = [
    {
      img: chill,
      nome: "chill",
    },
    {
      img: Dart,
      nome: "chibirdart",
    },
    {
      img: razoes,
      nome: "razoesparaacreditar",
    },
    {
      img: adorable,
      nome: "adorable_animals",
    },
    {
      img: cutecats,
      nome: "smallcutecats",
    },
  ];

  return (
    <>
      <div className="escrita-sidebar">
        <p>Sugestões para você</p>
        <p>Ver Tudo</p>
      </div>
      {Suggest.map((e) => {
        return <Sugestao img={e.img} nome={e.nome} />;
      })}

      {/*{" "}
      <div className="sugestões">
        <div className="escrita-sidebar">
          <p>Sugestões para você</p>
          <p>Ver Tudo</p>
        </div>

        <div className="caixa-perfil">
          <img src={chill} />
          <div className="palavras">
            <p className="nome">bad.vibes.memes</p>
            <p className="status-segue">Segue você</p>
          </div>
          <div className="Seguir">
            <h5>Seguir</h5>
          </div>
        </div>

        <div className="caixa-perfil">
          <img src="./images/download (11).png" />
          <div className="palavras">
            <p className="nome">chibirdart</p>
            <p className="status-segue">Segue você</p>
          </div>
          <div className="Seguir">
            <h5>Seguir</h5>
          </div>
        </div>

        <div className="caixa-perfil">
          <img src="./images/download (12).png" />
          <div className="palavras">
            <p className="nome">razoesparaacreditar</p>
            <p className="status-segue">Novo no Instagram</p>
          </div>
          <div className="Seguir">
            <h5>Seguir</h5>
          </div>
        </div>

        <div className="caixa-perfil">
          <img src="./images/download (13).png" />
          <div className="palavras">
            <p className="nome">adorable_animals</p>
            <p className="status-segue">Segue você</p>
          </div>
          <div className="Seguir">
            <h5>Seguir</h5>
          </div>
        </div>

        <div className="caixa-perfil">
          <img src="./images/download (14).png" />
          <div className="palavras">
            <p className="nome">smallcutecats</p>
            <p className="status-segue">Segue você</p>
          </div>
          <div className="Seguir">
            <h5>Seguir</h5>
          </div>
        </div>
  </div> */}
    </>
  );
}
