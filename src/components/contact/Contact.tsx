import { NavLink } from "react-router-dom";

import { SocialList } from "../socialList/SocialList";

import sprite from "../../assets/sprite.svg";

import styles from "./Contact.module.scss";

export const Contact = () => (
  <section className={styles.contact_container}>
    <h3 className={styles.title}>
      Feel free to reach out to me if you're looking for a developer, have a
      query, or simply want to connect.
    </h3>
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <svg aria-label="icon mail" className={styles.icon}>
          <use href={`${sprite}#icon-mail`}></use>
        </svg>
        <NavLink to="mailto:babenkovita1988@gmail.com" className={styles.link}>
          babenkovita1988@gmail.com
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <svg aria-label="icon call" className={styles.icon}>
          <use href={`${sprite}#icon-call`}></use>
        </svg>
        <NavLink to="tel:+380737660066" className={styles.link}>
          +380737660066
        </NavLink>
      </li>
    </ul>
    <p className={styles.second_title}>
      You may also find me on these platforms!
    </p>
    <SocialList />
  </section>
);
