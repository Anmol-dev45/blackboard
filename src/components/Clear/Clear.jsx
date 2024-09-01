import React from "react";
import { useBoards } from "../../context/boards";
import { ShieldMinus } from "lucide-react";
const Clear = () => {
  const { currentBoard, setBoards } = useBoards();
  const clearBoard = () => {
    setBoards((prev) => {
      const updatedBoards = [...prev];
      updatedBoards[currentBoard] = null;
      return updatedBoards;
    });
  };
  return (
    <button
      className="p-2 bg-gray-800 text-white rounded-md"
      onClick={clearBoard}
    >
      <ShieldMinus />
    </button>
  );
};

export default Clear;
