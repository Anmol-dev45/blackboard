import React from "react";
import { Undo as Icon } from "lucide-react";
import { useBoards } from "../context/boards";
const Undo = () => {
  const { canvasRef } = useBoards();
  const undo = () => canvasRef.current.undo();
  return (
    <button
      className={` p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
      onClick={undo}
    >
      <Icon />
    </button>
  );
};

export default Undo;
