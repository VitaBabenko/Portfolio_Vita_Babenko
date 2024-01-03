import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";

interface Menu {
  id: number;
  title: string;
  path: string;
}

const headerMenu: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Me",
    path: "/about",
  },
  {
    id: 3,
    title: "My projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
];

export const NavBar = () => (
  <ul className={styles.list}>
    {headerMenu.map((item) => (
      <li key={item.id}>
        <NavLink
          to={item.path}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
);
