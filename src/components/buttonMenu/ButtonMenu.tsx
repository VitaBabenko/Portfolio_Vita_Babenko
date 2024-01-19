import { FC } from "react";

import { ButtonMenuProps } from "./types";

import styles from "./ButtonMenu.module.scss";

export const ButtonMenu: FC<ButtonMenuProps> = ({
  toggleActiveBtn,
  isBtnActive,
}) => {
  return (
    <div
      onClick={toggleActiveBtn}
      className={isBtnActive ? styles.active_burger : styles.burger}
    >
      <span></span>
    </div>
  );
};
