import useSwitch from "./Custom Hooks/useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <main>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </main>
  );
}

export default App;
