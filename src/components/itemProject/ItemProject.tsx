import { FC } from "react";

import { ItemProjectProps } from "./types";

import styles from "./ItemProject.module.scss";

export const ItemProject: FC<ItemProjectProps> = ({
  id,
  url,
  urlGit,
  posterImg,
  title,
  description,
  technologies,
}) => (
  <li key={id} className={styles.list_item}>
    <a href={url} target="blank">
      <img src={posterImg} alt={title} className={styles.img} />
    </a>
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.title_desc}>{description}</p>
      <p className={styles.desc_tech}>{technologies}</p>
      <div className={styles.wrap_url}>
        <p className={styles.desc_url}>GitHub:</p>
        <a href={urlGit} className={styles.link}>
          {urlGit}
        </a>
      </div>
      <div className={styles.wrap_url}>
        <p className={styles.desc_url}>Link to the site:</p>
        <a href={url} className={styles.link}>
          {url}
        </a>
      </div>
    </div>
  </li>
);
