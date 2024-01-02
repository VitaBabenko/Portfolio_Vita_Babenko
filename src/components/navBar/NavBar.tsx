import { NavLink } from "react-router-dom";

const headerMenu = [
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
  <>
    {headerMenu.map((item) => (
      <NavLink to={item.path} key={item.id}>
        {item.title}
      </NavLink>
    ))}
  </>
);
