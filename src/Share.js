import shareIconWhite from "./images/icon-share-white.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";

const Share = function (prop) {
  return (
    <div className={prop.parentShare}>
      <span className={prop.cardShare}>SHARE</span>
      <ul className={prop.cardIcons}>
        <li>
          <a href="#/">
            <img src={facebook} />
          </a>
        </li>
        <li>
          <a href="#/">
            <img src={twitter} />
          </a>
        </li>
        <li>
          <a href="#/">
            <img src={pinterest} />
          </a>
        </li>
      </ul>
      <button onClick={prop.onClick}>
        <img src={shareIconWhite} className={prop.cardShareIcon} />
      </button>
    </div>
  );
};

export default Share;
