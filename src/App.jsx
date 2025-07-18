import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Clor Generator (tints and shades)</h2>

      <form>
        <label>Set Color</label>
        <input type="color" />
        <input type="text" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
