import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";

import styles from "./Error.module.scss";

export const Error = () => (
  <div className={styles.error_container}>
    <svg aria-label="icon 404" className={styles.icon}>
      <use href={`${sprite}#icon-404`}></use>
    </svg>
    <Link to="/" className={styles.link}>
      back home
    </Link>
  </div>
);
