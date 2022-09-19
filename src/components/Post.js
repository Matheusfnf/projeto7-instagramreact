import React, { useEffect, useState } from "react";
import trespontinhos from "../images/ellipsis-horizontal-outline (1).svg";
import heartoutline from "../images/heart-outline.svg";
import chatbubble from "../images/chatbubble-outline.svg";
import seta from "../images/6165369.png";
import bookmark from "../images/bookmark-outline.svg";
import respondeailogo from "../images/download (5).png";
import imgpequena from "../images/download (2).png";

import Sidebar from "./Sidebar";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function Post({ data }) {
  const [color, setColor] = useState(false);
  const [like, setLike] = useState(data.like);
  const [cor, setCor] = useState(false);

  const handleClick = () => {
    setColor(!color);
    if (!color) setLike(like + 1);
    if (color) setLike(like - 1);
  };

  const click = () => {
    setCor(!cor);
  };

  return (
    <>
      <div className="feed">
        <div className="feed-cima">
          <img className="imgpequena" src={data.logo} />
          <h3>{data.nome}</h3>
          <img className="tres-pontinhos" src={trespontinhos} />
        </div>
        <div className="post-img">
          <img src={data.imagem} />
        </div>
        <div className="feed-baixo">
          <div className="feed-baixo-icons">
            <div className="primeiros-icons">
              {color ? (
                <AiTwotoneHeart
                  className="AiTwotoneHeart "
                  onClick={() => handleClick()}
                />
              ) : (
                <AiOutlineHeart
                  className="AiOutlineHeart "
                  onClick={() => handleClick()}
                />
              )}
              <img src={chatbubble} />
              <img src={seta} />
            </div>
            {cor ? (
              <FaBookmark className="bookmark" onClick={() => click()} />
            ) : (
              <FaRegBookmark className="bookmark" onClick={() => click()} />
            )}
          </div>
          <div className="feed-baixo-paragrafo">
            <img className="fotinha-respondeai" src={data.logotipo} />
            <p>
              Curtido por <strong> {data.quem} </strong> e outras{" "}
              <strong> {like}</strong> pessoas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
