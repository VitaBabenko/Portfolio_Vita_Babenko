import { FC, useState } from "react";

import { ModalMenu } from "../modalMenu";
import { NavBar } from "../navBar";
import { LinkDownloadCV } from "../linkDownloadCV";
import { ButtonMenu } from "../buttonMenu";

import { HeaderProps } from "./types";

import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ isMobile }) => {
  const [isActive, setIsActive] = useState<boolean | undefined>();

  const btnToggleActive = () => {
    setIsActive(!isActive);
  };

  const btnCloseModal = () => {
    setIsActive(false);
  };

  return (
    <header>
      <div className={styles.header_container}>
        {isMobile ? (
          <ButtonMenu
            toggleActiveBtn={btnToggleActive}
            isBtnActive={isActive}
          />
        ) : (
          <>
            <NavBar btnClose={btnCloseModal} />
            <LinkDownloadCV />
          </>
        )}
        {isActive && (
          <ModalMenu btnClose={btnCloseModal} isBtnActive={isActive} />
        )}
      </div>
    </header>
  );
};
