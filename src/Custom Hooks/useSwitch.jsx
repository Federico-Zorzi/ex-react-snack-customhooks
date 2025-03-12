import { useState } from "react";

export default function useSwitch(initValue = false) {
  const [isOn, setIsOn] = useState(initValue);

  const toggle = () => {
    setIsOn((curr) => !curr);
  };

  return [isOn, toggle];
}
