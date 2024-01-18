import { useEffect } from "react";
import { FC } from "react";

import { NavBar } from "../navBar";
import { LinkDownloadCV } from "../linkDownloadCV";

import { ModalMenuProps } from "./types";

import styles from "./ModalMenu.module.scss";

export const ModalMenu: FC<ModalMenuProps> = ({ isBtnActive, btnClose }) => {
  useEffect(() => {
    if (isBtnActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBtnActive]);

  return (
    <div className={styles.backdrop} onClick={btnClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.wrap_link}>
            <NavBar btnClose={btnClose} />
            <LinkDownloadCV />
          </div>
        </div>
      </div>
    </div>
  );
};
