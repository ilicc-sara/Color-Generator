import React, { useState } from "react";

function Form() {
  const [color, setColor] = useState("");
  function handleSubmit() {}

  return (
    <section className="container">
      <h4>Color Generator</h4>

      <form className="color-form">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
      </form>
    </section>
  );
}
