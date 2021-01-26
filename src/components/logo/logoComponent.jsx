import React, { useRef } from "react";
import "../../css/style.css";

function Logo(props) {
  const { logo } = props;
  const buttonRef = useRef(null);

  const handleMouseOver = (e) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = buttonRef.current;
    const cursor = document.querySelector(".app-cursor");
    const move = 5;

    let xMove = (x / width) * (move * 2) - move;
    let yMove = (y / height) * (move * 2) - move;

    buttonRef.current.style.transform = `translate(${xMove}px, ${yMove}px) scale(1.1)`;
    cursor.style.transform = "scale(3)";
  };

  const handleMouseLeave = (e) => {
    const cursor = document.querySelector(".app-cursor");
    buttonRef.current.style.transform = "";
    cursor.style.transform = "";
  };

  if (!logo) {
    return <div />;
  }

  return (
    <ul
      className={logo.className}
      ref={buttonRef}
      onMouseOver={(e) => {
        handleMouseOver(e);
      }}
      onMouseOut={(e) => {
        handleMouseLeave(e);
      }}
    >
      <li>
        <h1 className="logo-dark">Observatório da</h1>
      </li>
      <li>
        <h1 className="logo">CPU</h1>
      </li>
    </ul>
  );
}

export default Logo;
