import sprite from "../../assets/sprite.svg";

import styles from "./SocialList.module.scss";

export const SocialList = () => (
  <ul className={styles.list}>
    <li>
      <a href="https://www.linkedin.com/in/vitababenko/" target="blank">
        <svg
          aria-label="icon linkedin"
          width="40px"
          height="40px"
          className={styles.icon}
        >
          <use href={`${sprite}#icon-linkedin`}></use>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://t.me/babenkovita" target="blank">
        <svg
          aria-label="icon telegram"
          width="40px"
          height="40px"
          className={styles.icon}
        >
          <use href={`${sprite}#icon-telegram`}></use>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://github.com/VitaBabenko" target="blank">
        <svg
          aria-label="icon github"
          width="40px"
          height="40px"
          className={styles.icon}
        >
          <use href={`${sprite}#icon-github`}></use>
        </svg>
      </a>
    </li>
  </ul>
);
