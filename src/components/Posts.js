import React from "react";
import "../components/styles.css";
import imgcachorrinho from "../images/cachorrinho.jpg";
import Post from "./Post";
import gatotelefone from "../images/gato-telefone.jpg";
import meowed from "../images/dowload1.png";
import barked from "../images/download (2).png";
import respondeai from "../images/download (5).png";
import adorable from "../images/download (13).png";

// posts {

export default function Posts() {
  const filmes = [
    {
      nome: "meowed",
      imagem: imgcachorrinho,
      logo: meowed,
      like: 100000,
      quem: "respondeai",
      logotipo: respondeai,
    },
    {
      nome: "barked",
      imagem: gatotelefone,
      logo: barked,
      like: 103334,
      quem: "adorable_animals",
      logotipo: adorable,
    },
  ];

  return (
    <>
      {filmes.map((e) => {
        return <Post data={e} />;
      })}

      {/* <div className="feed">
        <div className="feed-cima">
          <img className="imgpequena" src={imgpequena} />
          <h3>barked</h3>
          <img className="tres-pontinhos" src={trespontinhos} />
        </div>
        <div className="post-img">
          <img src={imgcachorrinho} />
        </div>
        <div className="feed-baixo">
          <div className="feed-baixo-icons">
            <div className="primeiros-icons">
              <img src={heartoutline} />
              <img src={chatbubble} />
              <img src={seta} />
            </div>
            <img src={bookmark} />
          </div>
          <div className="feed-baixo-paragrafo">
            <img className="fotinha-respondeai" src={respondeailogo} />
            <p>
              Curtido por <strong> adorable_animals </strong> e
              <strong> outras 99.159 pessoas </strong>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
