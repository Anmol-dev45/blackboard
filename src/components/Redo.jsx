import React from "react";
import { Redo as Icon } from "lucide-react";
import { useBoards } from "../context/boards";
const Redo = () => {
  const { canvasRef } = useBoards();
  const redo = () => canvasRef.current.redo();
  return (
    <button
      className={` p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
      onClick={redo}
    >
      <Icon />
    </button>
  );
};

export default Redo;
