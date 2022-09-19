import React from "react";
import "../components/styles.css";
import FundoStorie from "./Fundostories";
import gag from "../images/download.png";
import seta from "../images/chevron-forward-circle-outline.svg";
import meowed from "../images/dowload1.png";
import barked from "../images/download (2).png";
import nathan from "../images/download (3).png";
import wawa from "../images/download (4).png";
import respondeai from "../images/download (5).png";
import filomoderna from "../images/download (6).png";
import memelag from "../images/download (7).png";

export default function Stories() {
  const storie = [
    {
      img: gag,
      titulo: "9gag",
    },
    {
      img: meowed,
      titulo: "meowed",
    },
    {
      img: barked,
      titulo: "barked",
    },
    {
      img: nathan,
      titulo: "nathan",
    },
    {
      img: wawa,
      titulo: "wawawic",
    },
    {
      img: respondeai,
      titulo: "respondeai",
    },
    {
      img: filomoderna,
      titulo: "filomoderna",
    },
    {
      img: memelag,
      titulo: "memelag",
    },
  ];

  return (
    <>
      <div className="caixa-stories">
        {storie.map((e) => {
          return <FundoStorie img={e.img} titulo={e.titulo} />;
        })}
        <div className="seta">
          <img src={seta} />
        </div>
      </div>
      {/*{" "}
      <div className="caixa-stories">
        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download.png" />
          </div>

          <p>9gag</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/dowload1.png" />
          </div>

          <p>meowed</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download (2).png" />
          </div>
          <p>barked</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download (3).png" />
          </div>
          <p>nathanwpyle...</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download (4).png" />
          </div>
          <p>wawawiwac...</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download (5).png" />
          </div>
          <p>respondeai</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download (6).png" />
          </div>
          <p>filomoderna</p>
        </div>

        <div className="stories">
          <div className="img-stories">
            <img className="fundo-storie" src="./images/download (8).png" />
            <img className="img-storie" src="./images/download (7).png" />
          </div>
          <p>meme</p>
        </div>

        
      </div>{" "}
  */}
    </>
  );
}
