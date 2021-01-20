import React, { Component } from "react";
import NavItem from "./navItem";
import "../../css/style.css";

class HomeNav extends Component {
  state = {
    navItems: [
      { id: 1, value: "Início", url: "/", navClass: "homenav" },
      { id: 2, value: "Gráficos", url: "/graphs", navClass: "homenav" },
      {
        id: 3,
        value: "Processadores",
        url: "/processors",
        navClass: "homenav",
      },
      { id: 4, value: "Twitter", url: "/twitter", navClass: "homenav" },
    ],
  };

  render() {
    return (
      <div className="home-nav-container">
        <nav className="home-nav">
          <ul>
            {this.state.navItems.map((item) => (
              <NavItem
                key={item.id}
                value={item.value}
                url={item.url}
                navClass={item.navClass}
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomeNav;
