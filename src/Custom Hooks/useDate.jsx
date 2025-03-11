import { useEffect, useState } from "react";

export default function useDate(initValue = "") {
  const [date, setDate] = useState(initValue);

  useEffect(() => {
    const printDateInterval = setInterval((e) => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(printDateInterval);
  }, []);

  return date;
}
