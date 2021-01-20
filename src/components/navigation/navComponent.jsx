import React, { Component } from "react";
import NavItem from "./navItem";

class NavComponent extends Component {
  state = {
    navItems: [
      { id: 0, value: "Início", url: "/" },
      { id: 1, value: "Gráficos", url: "/graphs" },
      { id: 2, value: "Processadores", url: "/processors" },
      { id: 3, value: "Twitter", url: "/twitter" },
    ],
  };

  render() {
    return (
      <nav className="nav">
        <ul>
          {this.state.navItems.map((item) => (
            <NavItem key={item.id} value={item.value} url={item.url} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavComponent;
