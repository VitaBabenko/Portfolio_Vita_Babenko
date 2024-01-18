import { ItemProject } from "../itemProject";

import { Project } from "./types";

import projects from "../../data/projects.json";

import searchMovie from "../../assets/searchMovie.png";
import dogApp from "../../assets/dogApp.png";
import taobao from "../../assets/taobao.png";

import styles from "./Projects.module.scss";

const myProjects: Project[] = projects;

export const Projects = () => (
  <div className={styles.projects_container}>
    <ul className={styles.list}>
      {myProjects.map(
        ({ id, poster, title, url, urlGit, description, technologies }) => {
          const posterImg =
            poster === "searchMovie"
              ? searchMovie
              : poster === "dogApp"
              ? dogApp
              : poster === "taobao"
              ? taobao
              : undefined;

          return (
            <ItemProject
              key={id}
              id={id}
              posterImg={posterImg}
              title={title}
              url={url}
              urlGit={urlGit}
              description={description}
              technologies={technologies}
            />
          );
        }
      )}
    </ul>
  </div>
);
