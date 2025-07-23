import React from "react";
import { toast } from "react-toastify";

function SingleColor({ index, color }) {
  console.log(color);
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy");
      }
    } else {
      toast.error("Clipboard acces not available");
    }
  };
  return (
    <article
      className="color"
      style={{
        background: `#${hex}`,
        color: `${index > 10 ? "white" : "black"}`,
      }}
      onClick={() => saveToClipboard()}
    >
      <p className="percent-value"> {weight}% </p>
      <p className="color-value"> #{hex} </p>
    </article>
  );
}

export default SingleColor;
