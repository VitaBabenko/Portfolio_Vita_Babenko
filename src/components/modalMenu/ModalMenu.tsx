import { NavBar } from "../navBar/NavBar";
import { LinkDownloadCV } from "../linkDownloadCV/LinkDownloadCV";
import sprite from "../../assets/sprite.svg";
import styles from "./ModalMenu.module.scss";

type ModalMenuProps = {
  btnClose: () => void;
};

export const ModalMenu = ({ btnClose }: ModalMenuProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button type="button" className={styles.close_btn} onClick={btnClose}>
          <svg aria-label="icon close" className={styles.icon_close}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <div className={styles.wrap_link}>
          <NavBar btnClose={btnClose} />
          <LinkDownloadCV />
        </div>
      </div>
    </div>
  );
};
