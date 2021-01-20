import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import "../../css/style.css";

function NavItem(props) {
  const { url, value, id, navClass } = props;
  const buttonRef = useRef(null);

  const handleMouseOver = (e, value) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = buttonRef.current;
    const cursor = document.querySelector(".app-cursor");

    const move = 15;

    let xMove = (x / width) * (move * 2) - move;
    let yMove = (y / height) * (move * 2) - move;

    buttonRef.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
    cursor.style.transform = "scale(3 )";
    if (
      value === "Twitter" &&
      buttonRef.current.className === "hover-this homenav"
    ) {
      const twitter = document.querySelector(".cls-2");

      TweenMax.set("body", {
        backgroundColor: "#f7f8fa",
        duration: 5,
        ease: Power3.easeIn,
      });
      TweenMax.fromTo(
        twitter,
        1,
        {
          x: -80,
          y: 0,
          display: "none",
          opacity: "0%",
        },
        {
          x: -80,
          y: -80,
          display: "block",
          opacity: "100%",
        }
      );
    }
  };

  const handleMouseLeave = (e) => {
    const cursor = document.querySelector(".app-cursor");
    buttonRef.current.style.transform = "";
    cursor.style.transform = "";

    if (
      value === "Twitter" &&
      buttonRef.current.className === "hover-this homenav"
    ) {
      const twitter = document.querySelector(".cls-2");

      TweenMax.to(twitter, 1, {
        opacity: "0%",
      });
      TweenMax.set("body", {
        backgroundColor: "#0eeb6a",
        ease: Power3.easeOut,
      });
    }
  };

  return (
    <li>
      <Link to={url} key={url}>
        <button
          key={id}
          ref={buttonRef}
          className={navClass ? `hover-this ${navClass}` : "hover-this"}
          onMouseOver={(e) => {
            handleMouseOver(e, value);
          }}
          onMouseLeave={(e) => {
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
