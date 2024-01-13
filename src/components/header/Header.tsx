import { useState } from "react";
import { FC } from "react";

import { NavBar } from "../navBar/NavBar";
import { LinkDownloadCV } from "../linkDownloadCV/LinkDownloadCV";
import { ModalMenu } from "../modalMenu/ModalMenu";

import { HeaderProps } from "./types";

import sprite from "../../assets/sprite.svg";

import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ isMobile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const btnOpenModal = () => {
    setIsModalOpen(true);
  };

  const btnCloseModal = () => {
    setIsModalOpen(false);
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
        {isModalOpen && (
          <ModalMenu btnClose={btnCloseModal} isOpen={isModalOpen} />
        )}
      </div>
    </header>
  );
};
