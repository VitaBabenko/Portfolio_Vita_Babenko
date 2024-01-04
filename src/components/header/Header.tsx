import { useState } from "react";
import { NavBar } from "../navBar/NavBar";
import { LinkDownloadCV } from "../linkDownloadCV/LinkDownloadCV";
import { ModalMenu } from "../modalMenu/ModalMenu";
import sprite from "../../assets/sprite.svg";

import styles from "./Header.module.scss";

type HeaderProps = {
  isMobile: boolean;
};

export const Header = ({ isMobile }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const btnOpenModal = () => {
    setIsOpen(true);
  };

  const btnCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className={styles.header_container}>
        {isMobile ? (
          <button
            type="button"
            className={styles.btn_burger}
            onClick={btnOpenModal}
          >
            <svg aria-label="icon burger" className={styles.icon_burger}>
              <use href={`${sprite}#icon-burger`}></use>
            </svg>
          </button>
        ) : (
          <>
            <NavBar btnClose={btnCloseModal} />
            <LinkDownloadCV />
          </>
        )}
        {isOpen && <ModalMenu btnClose={btnCloseModal} />}
      </div>
    </header>
  );
};
