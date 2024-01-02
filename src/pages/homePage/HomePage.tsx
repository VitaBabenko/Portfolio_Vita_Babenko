import photo from "../../assets/vita.jpeg";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Frontend Developer</h1>
        <p>
          Welcome to the world of frontend development, where creativity meets
          functionality to bring web designs to life! As a frontend developer,
          I’m the architect of the user experience, crafting visually appealing
          and interactive websites that captivate users from the first click. My
          expertise lies in translating design concepts into seamless,
          responsive, and user-friendly interfaces that leave a lasting
          impression.
        </p>
      </div>
      <div>
        <img src={photo} alt="photo" />
      </div>
    </div>
  );
};
