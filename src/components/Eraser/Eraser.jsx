import React from "react";
import { Eraser as Icon } from "lucide-react";
import { useBoards } from "../../context/boards";

const Eraser = () => {
  const { isErasing, setIsErasing } = useBoards();
  return (
    <button
      className={`${
        isErasing && "shadow-[0_0_0_2px_rgba(255,255,255,0.5)]"
      } p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
      onClick={() => {
        setIsErasing(true);
      }}
    >
      <Icon />
    </button>
  );
};

export default Eraser;
