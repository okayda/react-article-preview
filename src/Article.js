import { useState } from "react";

import Share from "./Share";
import style from "./scss/article.module.css";
import shareIcon from "./images/icon-share.svg";

const Article = function () {
  const [activeShare, setShare] = useState(false);

  const showShare = function () {
    setShare(true);
  };

  const hideShare = function () {
    setShare(false);
  };

  return (
    <article className={style.card}>
      <div className={`${style.card__box} `}>
        <img
          src={require("./images/drawers.jpg")}
          className={style.card__img_content}
          alt="Furniture"
        />

        <div className={style.card__wrapped}>
          <Share
            parentShare={`${style.card__mobile_state} ${
              activeShare ? style.show : style.hide
            }`}
            cardShare={style.card__share}
            cardIcons={style.card__icons}
            onClick={hideShare}
            cardShareIcon={style.card__share_icon}
          />

          <div className={style.card__content}>
            <h2 className={style.card__title}>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className={style.card__description}>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete
            </p>
          </div>
          <div className={style.card__person}>
            <div className={style.card__information}>
              <img src={require("./images/avatar-michelle.jpg")} />
              <div className={style.card__identification}>
                <span className={style.name}>Michelle Appleton</span>
                <span className={style.date}>28 Jun 2020</span>
              </div>
            </div>
            <button onClick={showShare}>
              <img src={shareIcon} className={style.card__share_icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
