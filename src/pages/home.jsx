import React, { Component } from "react";
import HomeNav from "../components/navigation/navComponent";
import WaveSVG from "./pageElements/soudwaveSVG";
import Logo from "../components/logo/logoComponent";
import "../css/style.css";

class Home extends Component {
  state = {
    navItems: [
      {
        id: 0,
        value: "Início",
        url: "/",
        navClass: "hover-this homenav",
        pageIndex: 0,
      },
      {
        id: 1,
        value: "Gráficos",
        url: "/graphs",
        navClass: "hover-this homenav",
        pageIndex: 0,
      },
      {
        id: 2,
        value: "Processadores",
        url: "/processors",
        navClass: "hover-this homenav",
        pageIndex: 0,
      },
      {
        id: 3,
        value: "Twitter",
        url: "/twitter",
        navClass: "hover-this homenav",
        pageIndex: 0,
      },
    ],
    nav: { id: 0, className: "home-nav" },
    logoState: { logo: { className: "logoBlock" } },
  };

  render() {
    return (
      <div className="home-container">
        <Logo {...this.state.logoState} />
        <div className="home-nav-container">
          <HomeNav {...this.state} />
        </div>
        <WaveSVG />
      </div>
    );
  }
}

export default Home;
