import { useState, useRef } from "react";
import "./App.css";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

// new Values("#f15025").all(10);

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  console.log(new Values("#f15025").all(10));

  toast.error("error");
  toast.success("success");

  function addColor(color) {
    console.log(color);

    try {
      const newColors = new Values(color);
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

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
      <ToastContainer position="top-center" />
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
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </>
  );
}

export default App;
