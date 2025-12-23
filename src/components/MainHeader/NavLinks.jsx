import React from "react";
import styles from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { id: "home", label: "Home", path: "/" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "about", label: "About", path: "/about" },
    { id: "login", label: "Login", path: "/login" },
  ];

  const currentPath = window.location.pathname;
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={currentPath === link.path ? styles.active: ""}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
