import React from "react";

import { Pen as Icon } from "lucide-react";
import { useBoards } from "../../context/boards";

const Pen = () => {
  const { isErasing, setIsErasing } = useBoards();
  return (
    <button
      className={`${
        isErasing || "shadow-[0_0_0_2px_rgba(255,255,255,0.5)]"
      } p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
      onClick={() => {
        setIsErasing(false);
      }}
    >
      <Icon />
    </button>
  );
};

export default Pen;
