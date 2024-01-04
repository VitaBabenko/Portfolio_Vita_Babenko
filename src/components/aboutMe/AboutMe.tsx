import sprite from "../../assets/sprite.svg";

import styles from "./AboutMe.module.scss";

interface Skill {
  id: number;
  logo: string;
  name: string;
}
const skills: Skill[] = [
  {
    id: 1,
    logo: `${sprite}#icon-javascript`,
    name: "JavaScript",
  },
  {
    id: 2,
    logo: `${sprite}#icon-typescript`,
    name: "TypeScript",
  },
  {
    id: 3,
    logo: `${sprite}#icon-react`,
    name: "React",
  },
  {
    id: 4,
    logo: `${sprite}#icon-redux`,
    name: "Redux",
  },
  {
    id: 5,
    logo: `${sprite}#icon-material-ui`,
    name: "Material UI",
  },
  {
    id: 6,
    logo: `${sprite}#icon-css`,
    name: "CSS3",
  },
  {
    id: 7,
    logo: `${sprite}#icon-axios`,
    name: "Axios",
  },
  {
    id: 8,
    logo: `${sprite}#icon-git`,
    name: "Git",
  },
  {
    id: 9,
    logo: `${sprite}#icon-html5`,
    name: "HTML5",
  },
  {
    id: 10,
    logo: `${sprite}#icon-webpack`,
    name: "Webpack",
  },
  {
    id: 11,
    logo: `${sprite}#icon-parcel`,
    name: "Parcel",
  },
  {
    id: 12,
    logo: `${sprite}#icon-vite`,
    name: "Vite",
  },
  {
    id: 13,
    logo: `${sprite}#icon-sass`,
    name: "Sass",
  },
  {
    id: 14,
    logo: `${sprite}#icon-figma`,
    name: "Figma",
  },
  {
    id: 15,
    logo: `${sprite}#icon-storybook`,
    name: "Storybook",
  },
  {
    id: 16,
    logo: `${sprite}#icon-styled-components`,
    name: "Styled-components",
  },
];

export const AboutMe = () => (
  <div className={styles.about_container}>
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
        {skills.map(({ id, logo, name }) => {
          return (
            <li key={id} className={styles.list_item}>
              <svg aria-label={name} width="50px" height="50px">
                <use href={logo}></use>
              </svg>
              <p className={styles.icon_name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
