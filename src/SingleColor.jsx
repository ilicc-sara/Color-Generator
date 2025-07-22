import React from "react";

function SingleColor({ index, color }) {
  console.log(color);
  const { hex, weight } = color;
  return (
    <article
      className="color"
      style={{
        background: `#${hex}`,
        color: `${index > 10 ? "white" : "black"}`,
      }}
    >
      <p className="percent-value"> {weight}% </p>
      <p className="color-value"> #{hex} </p>
    </article>
  );
}

export default SingleColor;
