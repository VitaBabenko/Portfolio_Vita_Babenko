import searchMovie from "../../assets/searchMovie.png";
import dogApp from "../../assets/dogApp.png";
import taobao from "../../assets/taobao.png";

import styles from "./Projects.module.scss";

interface Project {
  id: number;
  poster: string;
  title: string;
  description: string;
  technologies: string;
  url: string;
  urlGit: string;
}

const projects: Project[] = [
  {
    id: 1,
    poster: searchMovie,
    title: "MovieSearch",
    description:
      "MovieSearch website with a responsive layout. This is a simple movie search website, where you can read its description, cast, and reviews.",
    technologies:
      "React, React Router, Axios, JavaScript, styled-components, Figma, Git",
    url: "https://vitababenko.github.io/react-router-search-movies/",
    urlGit: "https://github.com/VitaBabenko/react-router-search-movies",
  },
  {
    id: 2,
    poster: dogApp,
    title: "Dog App",
    description:
      "Dog App website with a responsive layout. This is a website where you can find out about different breeds of dogs and read their characteristics. You can also add your favorite dogs, vote for those you like or not. And upload your dog photos.",
    technologies:
      "Vite, React, TypeScript, Storybook, Material-UI, rtk query, Figma, Git",
    url: "https://dog-app-init.vercel.app",
    urlGit: "https://github.com/VitaBabenko/dog-app-init",
  },
  {
    id: 3,
    poster: taobao,
    title: "Taobao",
    description:
      "Taobao website with a responsive layout. Website business card about the provision of information services. It's a command project. My job was to code these two sections, make them work well on different devices, and also implement a clean and organized code structure.",
    technologies: "Next.js, JavaScript, CSS, Figma, Git",
    url: "https://taobao-pinduoduo-yatsenko.netlify.app",
    urlGit: "https://github.com/KharlanEd/taobao-website",
  },
];

export const Projects = () => (
  <div className={styles.projects_container}>
    <ul className={styles.list}>
      {projects.map(
        ({ id, poster, title, url, urlGit, description, technologies }) => {
          return (
            <li key={id} className={styles.list_item}>
              <a href={url} target="blank" className={styles.link_img}>
                <img src={poster} alt={title} className={styles.img} />
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
        }
      )}
    </ul>
  </div>
);
