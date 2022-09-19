import React from "react";
import "../components/styles.css";
import seta from "../images/6165369.png";
import comprassoutline from "../images/compass-outline.svg";
import heart from "../images/heart-outline.svg";
import personoutline from "../images/person-outline.svg";
import logoescrita from "../images/logo.png";
import logo from "../images/logo-instagram.svg";

export default function NavBar() {
  return (
    <>
      {" "}
      <div class="topo">
        <div class="topo-esquerdo">
          <img class="logotipo" src={logo} />
          <img class="logoescrita" src={logoescrita} />
        </div>
        <div class="pesquisar">
          <h4>Pesquisar</h4>
        </div>
        <div class="topo-direito">
          <img src={seta} />
          <img src={comprassoutline} />
          <img src={heart} />
          <img src={personoutline} />
        </div>
      </div>
    </>
  );
}

/*

          <div>
            <div className="caixa-stories">
              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download.png" />
                </div>

                <p>9gag</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/dowload1.png" />
                </div>

                <p>meowed</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download (2).png" />
                </div>
                <p>barked</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download (3).png" />
                </div>
                <p>nathanwpyle...</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download (4).png" />
                </div>
                <p>wawawiwac...</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download (5).png" />
                </div>
                <p>respondeai</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download (6).png" />
                </div>
                <p>filomoderna</p>
              </div>

              <div className="stories">
                <div className="img-stories">
                  <img
                    className="fundo-storie"
                    src="./images/download (8).png"
                  />
                  <img className="img-storie" src="./images/download (7).png" />
                </div>
                <p>meme</p>
              </div>

              <div className="seta">
                <img src="./images/chevron-forward-circle-outline.svg" />
              </div>
            </div>

            <div className="feed">
              <div className="feed-cima">
                <img className="imgpequena" src="./images/dowload1.png" />
                <h3>meowed</h3>
                <img
                  className="tres-pontinhos"
                  src="./images/ellipsis-horizontal-outline (1).svg"
                />
              </div>
              <div className="post-img">
                <img src="./images/gato-telefone.jpg" />
              </div>
              <div className="feed-baixo">
                <div className="feed-baixo-icons">
                  <div className="primeiros-icons">
                    <img src="./images/heart-outline.svg" />
                    <img src="./images/chatbubble-outline.svg" />
                    <img src="./images/6165369.png" />
                  </div>
                  <img src="./images/bookmark-outline.svg" />
                </div>
                <div className="feed-baixo-paragrafo">
                  <img
                    className="fotinha-respondeai"
                    src="./images/download (5).png"
                  />
                  <p>
                    Curtido por <strong> respondeai </strong> e
                    <strong> outras 101.523 pessoas </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="feed">
              <div className="feed-cima">
                <img className="imgpequena" src="./images/download (2).png" />
                <h3>barked</h3>
                <img
                  className="tres-pontinhos"
                  src="./images/ellipsis-horizontal-outline (1).svg"
                />
              </div>
              <div className="post-img">
                <img src="./images/cachorrinho.jpg" />
              </div>
              <div className="feed-baixo">
                <div className="feed-baixo-icons">
                  <div className="primeiros-icons">
                    <img src="./images/heart-outline.svg" />
                    <img src="./images/chatbubble-outline.svg" />
                    <img src="./images/6165369.png" />
                  </div>
                  <img src="./images/bookmark-outline.svg" />
                </div>
                <div className="feed-baixo-paragrafo">
                  <img
                    className="fotinha-respondeai"
                    src="./images/download (13).png"
                  />
                  <p>
                    Curtido por <strong> adorable_animals </strong> e
                    <strong> outras 99.159 pessoas </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
*/
