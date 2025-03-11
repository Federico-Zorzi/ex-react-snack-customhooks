import useSwitch from "./Custom Hooks/useSwitch";
import useDate from "./Custom Hooks/useDate";
import useCustomPointer from "./Custom Hooks/useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <main>
      {customPointer}
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
      <p>{currentDate.toLocaleString()}</p>
    </main>
  );
}

export default App;
