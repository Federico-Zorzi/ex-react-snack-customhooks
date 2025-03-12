import { useEffect, useState } from "react";

export default function useCustomPointer(customCursor) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", cursorPosition);

    return () => document.removeEventListener("mousemove", cursorPosition);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        cursor: "none",
        zIndex: 9999,
      }}
    >
      {/* {position.x} , {position.y} */}
      {customCursor}
    </div>
  );
}
