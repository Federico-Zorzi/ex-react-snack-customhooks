import useSwitch from "./Custom Hooks/useSwitch";
import useDate from "./Custom Hooks/useDate";
import useCustomPointer from "./Custom Hooks/useCustomPointer";
import useKeyPress from "./Custom Hooks/useKeyPress";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");
  const isEnterPressed = useKeyPress("Enter");

  return (
    <main>
      <h1>Custom Hooks</h1>

      <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggle}>Cambia Stato</button>

      <h2>Data e ora attuali:</h2>
      <p>{currentDate.toLocaleString()}</p>

      <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
      {customPointer}

      <h2>Tieni premuto "Enter" per testare il custom hook</h2>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </main>
  );
}

export default App;
