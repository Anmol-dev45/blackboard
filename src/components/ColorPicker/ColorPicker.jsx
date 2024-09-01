import React from "react";
import "./ColorPicker.css";
import { useBoards } from "../../context/boards";
const ColorPicker = () => {
  const { isErasing, setColor, color } = useBoards();
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      disabled={isErasing}
      className={`w-10 h-10 border-gray-800 border-2 rounded-md  ${
        isErasing ? "opacity-50 cursor-not-allowed" : ""
      }`}
    />
  );
};

export default ColorPicker;
