import React from "react";
import NavItem from "./navItem";
import "../../css/style.css";

function NavComponent(props) {
  const { navItems, nav } = props;

  if (!navItems) {
    return <nav />;
  }

  return (
    <nav className={nav.className} key={nav.id}>
      <ul>
        {navItems.map((item) => {
          return <NavItem key={item.id} {...item} />;
        })}
      </ul>
    </nav>
  );
}

export default NavComponent;
