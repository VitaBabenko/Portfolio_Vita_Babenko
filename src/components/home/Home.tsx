import photo from "../../assets/vita.jpeg";
import sprite from "../../assets/sprite.svg";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home_container}>
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
        <ul className={styles.list}>
          <li>
            <a href="https://www.linkedin.com/in/vitababenko/" target="blank">
              <svg aria-label="icon linkedin" width="40px" height="40px">
                <use href={`${sprite}#icon-linkedin`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://t.me/babenkovita" target="blank">
              <svg aria-label="icon telegram" width="40px" height="40px">
                <use href={`${sprite}#icon-telegram`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/VitaBabenko" target="blank">
              <svg aria-label="icon github" width="40px" height="40px">
                <use href={`${sprite}#icon-github`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <img src={photo} alt="photo" className={styles.photo} />
    </div>
  );
};
