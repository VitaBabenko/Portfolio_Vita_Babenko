import { Skill } from "./types";

import skills from "../../data/skiils.json";

import sprite from "../../assets/sprite.svg";

import styles from "./AboutMe.module.scss";

const mySkills: Skill[] = skills;

export const AboutMe = () => (
  <section className={styles.about_container}>
    <div>
      <h3 className={styles.title}>Curious about me? Here you have it:</h3>
      <p className={styles.description}>
        As a <b className={styles.desc}>frontend Developer</b>, I love working
        on user-centered solutions that push the boundaries of interface design.
        <br />
        My journey in web development has been fueled by a deep curiosity and a
        desire to learn new skills and technologies.
        <br />I am very enthusiastic about bringing the technical and visual
        aspects of digital products to life. User experience, pixel perfect
        design, and writing clear, readable, highly performant code matters to
        me.
        <br />I am also eager to contribute to innovative and impactful projects
        that make a difference in the lives of users and communities.
      </p>
    </div>
    <div>
      <h3 className={styles.title}>
        The skills, technologies and tools I use:
      </h3>
      <ul className={styles.list}>
        {mySkills.map(({ id, logo, name }) => {
          return (
            <li key={id} className={styles.list_item}>
              <svg aria-label={name} width="50px" height="50px">
                <use href={`${sprite}#${logo}`}></use>
              </svg>
              <p className={styles.icon_name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
