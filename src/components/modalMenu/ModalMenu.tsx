import { useEffect } from "react";
import { FC } from "react";

import { NavBar } from "../navBar/NavBar";
import { LinkDownloadCV } from "../linkDownloadCV/LinkDownloadCV";

import { ModalMenuProps } from "./types";

import sprite from "../../assets/sprite.svg";

import styles from "./ModalMenu.module.scss";

export const ModalMenu: FC<ModalMenuProps> = ({ isOpen, btnClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={styles.backdrop} onClick={btnClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
};
