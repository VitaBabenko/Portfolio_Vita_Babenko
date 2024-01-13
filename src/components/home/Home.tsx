import { SocialList } from "../socialList/SocialList";

import photo from "../../assets/vita.jpeg";
import sprite from "../../assets/sprite.svg";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <section className={styles.home_container}>
      <img src={photo} alt="photo" className={styles.photo} />
      <div>
        <h1 className={styles.title}>Hi, I`m Vita</h1>
        <p className={styles.desrciption}>
          And welcome to the world of frontend development, where creativity
          meets functionality to bring web designs to life!
          <br /> As a <b className={styles.desc}>frontend developer</b>, I’m the
          architect of the user experience, crafting visually appealing and
          interactive websites that captivate users from the first click. My
          expertise lies in translating design concepts into seamless,
          responsive, and user-friendly interfaces that leave a lasting
          impression.
        </p>
        <div className={styles.wrap}>
          <svg aria-label="icon location" width="40px" height="40px">
            <use href={`${sprite}#icon-locate-Icon`}></use>
          </svg>
          <p>Kyiv, Ukraine</p>
        </div>
        <SocialList />
      </div>
    </section>
  );
};
