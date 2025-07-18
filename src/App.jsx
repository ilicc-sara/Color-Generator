import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const myRef = useRef();
  const [colorValue, setColorValue] = useState();

  console.log(myRef.current?.value);

  return (
    <>
      <h2>Clor Generator (tints and shades)</h2>

      <form>
        <label>Set Color</label>
        <input
          ref={myRef}
          type="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <input type="text" value={colorValue} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
