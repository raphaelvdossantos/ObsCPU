import React, { useEffect, useRef } from "react";
import "../../css/style.css";

function Cursor() {
  let cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX: x, clientY: y } = event;
      cursorRef.current.style.left = x + "px";
      cursorRef.current.style.top = y + "px";
    });
  }, []);

  return <div ref={cursorRef} className="app-cursor"></div>;
}

export default Cursor;
