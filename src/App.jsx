import useSwitch from "./Custom Hooks/useSwitch";
import useDate from "./Custom Hooks/useDate";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

  return (
    <main>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
      <p>{currentDate.toLocaleString()}</p>
    </main>
  );
}

export default App;
