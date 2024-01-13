import CV from "../../assets/Vita Babenko. Frontend Developer.pdf";

import styles from "./LinkDownloadCV.module.scss";

export const LinkDownloadCV = () => (
  <a href={CV} download className={styles.link}>
    Download CV
  </a>
);
