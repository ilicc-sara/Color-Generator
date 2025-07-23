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

  // toast.error("error");
  // toast.success("success");

  function addColor(color) {
    console.log(color);

    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <>
      <ToastContainer position="top-center" />

      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </>
  );
}

export default App;
