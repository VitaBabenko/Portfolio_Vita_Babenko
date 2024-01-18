import { FC } from "react";
import { NavLink } from "react-router-dom";

import { NavBarProps, Menu } from "./types";

import headerMenu from "../../data/headerMenu.json";

import styles from "./NavBar.module.scss";

const menuLink: Menu[] = headerMenu;

export const NavBar: FC<NavBarProps> = ({ btnClose }) => (
  <ul className={styles.list}>
    {menuLink.map((item) => (
      <li key={item.id}>
        <NavLink
          to={item.path}
          onClick={btnClose}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
);
