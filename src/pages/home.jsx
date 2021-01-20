import React from "react";
import HomeNav from "../components/navigation/homeNavComponent";
import TwitterSVG from "./pageElements/twitterLogo";
import "../css/style.css";

function Home() {
  return (
    <div className="home-container">
      <HomeNav />
      <div></div>
      <TwitterSVG />
    </div>
  );
}

export default Home;
