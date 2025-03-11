import { useEffect, useState } from "react";

export default function useKeyPress(key = "") {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const pressKey = (e) => {
      setKeyPressed(e.key === key);
    };

    const releaseKey = () => {
      setKeyPressed(false);
    };

    document.addEventListener("keydown", pressKey);
    document.addEventListener("keyup", releaseKey);
    return () => {
      document.removeEventListener("keydown", pressKey);
      document.removeEventListener("keyup", releaseKey);
    };
  }, [key]);

  return keyPressed;
}
