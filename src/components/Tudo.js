import React from "react";
import "../components/styles.css";

export default function Tudo() {
  return (
    <>
      <div className="topo">
        <div className="topo-esquerdo">
          <img className="logotipo" src="./images/logo-instagram.svg" />
          <img className="logoescrita" src="./images/logo.png " />
        </div>
        <div className="pesquisar">
          <h4>Pesquisar</h4>
        </div>
        <div className="topo-direito">
          <img src="./images/6165369.png" />
          <img src="./images/compass-outline.svg" />
          <img src="./images/heart-outline.svg" />
          <img src="./images/person-outline.svg" />
        </div>
      </div>
      <div className="website">
        <section>
          <div className="sidebar">
            <div className="sidebar-topo">
              <img src="./images/download (9).png" />

              <div className="username">
                <p>catanacomics</p>
                <p>Catana</p>
              </div>
            </div>
            <div className="sugestões">
              <div className="escrita-sidebar">
                <p>Sugestões para você</p>
                <p>Ver Tudo</p>
              </div>

              <div className="caixa-perfil">
                <img src="./images/download (10).png" />
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
            </div>
            <div className="informaçoes-adicionais">
              <p className="sobre-ajuda">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma{" "}
              </p>
            </div>
            <div className="informaçoes-adicionais-2 ">
              <p className="ano-de-publicacao">
                {" "}
                © 2021 INSTAGRAM DO FACEBOOK{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
