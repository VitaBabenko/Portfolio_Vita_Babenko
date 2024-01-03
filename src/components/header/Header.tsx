import { NavBar } from "../navBar/NavBar";
import CV from "../../assets/Vita Babenko. Frontend Developer.React.pdf";

import styles from "./Header.module.scss";

export const Header = () => (
  <header>
    <div className={styles.header_container}>
      <NavBar />
      <a href={CV} download className={styles.link}>
        Download CV
      </a>
    </div>
  </header>
);
