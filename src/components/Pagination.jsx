import React from "react";
import { useBoards } from "../context/boards";

const Pagination = () => {
  const { currentBoard, setCurrentBoard } = useBoards();
  return (
    <div className="flex items-center gap-6 text-3xl text-white">
      <button
        onClick={() => {
          setCurrentBoard((prev) => Math.max(prev - 1, 0));
        }}
        disabled={currentBoard === 0}
      >
        ←
      </button>
      <span>{currentBoard + 1}</span>
      <button
        onClick={() => {
          setCurrentBoard((prev) => prev + 1);
        }}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
