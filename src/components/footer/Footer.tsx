// import { NavLink } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer>
    <div className={styles.footer_container}>
      <svg aria-label="icon c" width="18px" height="18px">
        <use href={`${sprite}#icon-c-Icon`}></use>
      </svg>
      <p className={styles.footer_text}>2024</p>
      <p className={styles.footer_text}>Coded with</p>
      <svg aria-label="icon heart" width="20px" height="20px">
        <use href={`${sprite}#icon-heart`}></use>
      </svg>
      <p className={styles.footer_text}>by Vita Babenko</p>
    </div>
  </footer>
);

// <ul>
//   <li>
//     <NavLink to="mailto:babenkovita1988@gmail.com">
//       babenkovita1988@gmail.com
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="tel:+380737660066">+380737660066</NavLink>
//   </li>
// </ul>
