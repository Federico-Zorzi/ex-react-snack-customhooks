import { useState } from "react";

export default function useSwitch(initValue = false) {
  const [isOn, setIsOn] = useState(initValue);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return [isOn, toggle];
}
