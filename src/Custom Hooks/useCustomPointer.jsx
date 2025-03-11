import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function useCustomPointer(customCursor) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", cursorPosition);
    document.body.style.cursor = "none";
    return () => {
      document.removeEventListener("mousemove", cursorPosition);
      document.body.style.cursor = "auto";
    };
  }, []);

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {/* {position.x} , {position.y} */}
      {customCursor}
    </div>,
    document.body
  );
}
