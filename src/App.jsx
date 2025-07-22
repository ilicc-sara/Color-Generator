import { useState, useRef } from "react";
import "./App.css";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";

// new Values("#f15025").all(10);

function App() {
  const [colors, setColors] = useState([]);
  console.log(new Values("#f15025").all(10));
  // const myRef = useRef();
  // const [colorValue, setColorValue] = useState("ffffff");

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log(colorValue);

  //   if (myRef.current) {
  //     myRef.current.style.backgroundColor = colorValue;
  //   }
  // }

  return (
    <>
      {/* <h2>Clor Generator (tints and shades)</h2>

      <form onSubmit={handleSubmit}>
        <label>Set Color</label>
        <input
          type="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <input
          type="text"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div ref={myRef} className="color-tab"></div> */}
      <Form />
      <ColorList colors={colors} />
    </>
  );
}

export default App;
