import { useEffect, useState } from "react";

export default function useKeyPress(targetKey = "") {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const pressKey = (e) => {
      if (e.key === targetKey) setKeyPressed(true);
    };

    const releaseKey = (e) => {
      if (e.key === targetKey) setKeyPressed(false);
    };

    document.addEventListener("keydown", pressKey);
    document.addEventListener("keyup", releaseKey);
    return () => {
      document.removeEventListener("keydown", pressKey);
      document.removeEventListener("keyup", releaseKey);
    };
  }, [targetKey]);

  return keyPressed;
}
