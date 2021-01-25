import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

function NavItem(props) {
  const { url, value, id, navClass, pageIndex } = props;
  const buttonRef = useRef(null);

  const isSelectedPage = () => {
    return id === pageIndex ? " blackBtn" : "";
  };

  const isEvenPage = () => {
    return pageIndex % 2 === 0 || id % 2 !== 0 ? " even" : " odd";
  };

  const handleMouseOver = (e) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = buttonRef.current;
    const cursor = document.querySelector(".app-cursor");
    const move = pageIndex === 0 ? 15 : 5;

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

  let btnClassName = navClass + isSelectedPage() + isEvenPage();

  return (
    <li>
      <Link to={url}>
        <button
          key={id}
          ref={buttonRef}
          className={btnClassName}
          onMouseOver={(e) => {
            handleMouseOver(e);
          }}
          onMouseOut={(e) => {
            handleMouseLeave(e);
          }}
        >
          {value}
        </button>
      </Link>
    </li>
  );
}

export default NavItem;
