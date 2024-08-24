import { useEffect, useRef, useState } from "react";
import Blackboard from "./components/BlackBoard/BlackBoard";
import { DEFAULT_BRUSH_RADIUS, DEFAULT_PEN_COLOR } from "./constants";
import { Eraser, Pen, ShieldMinus } from "lucide-react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Range from "./components/Range/Range";

function App() {
  const [color, setColor] = useState(DEFAULT_PEN_COLOR);
  const [brushRadius, setBrushRadius] = useState(DEFAULT_BRUSH_RADIUS);
  const [isErasing, setIsErasing] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(0);
  const [boards, setBoards] = useState([null]);

  // useEffect(() => {
  //   loadCanvasData();
  // }, [currentBoard]);

  const activatePen = () => {
    setIsErasing(false);
  };

  const activateEraser = () => {
    setIsErasing(true);
  };

  const clearBoard = () => {
    setBoards((prev) => {
      const updatedBoards = [...prev];
      updatedBoards[currentBoard] = null;
      return updatedBoards;
    });
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="fixed top-4 left-4 z-10">
        <div className="flex flex-col gap-4 items-center mt-7 ml-3">
          <button
            className="p-2 bg-gray-800 text-white rounded-md"
            onClick={clearBoard}
          >
            <ShieldMinus />
          </button>
          <ColorPicker
            color={color}
            setColor={setColor}
            isErasing={isErasing}
          />
          <Range value={brushRadius} setBrushRadius={setBrushRadius} />
          <button
            className={`${
              isErasing || "shadow-[0_0_0_2px_rgba(255,255,255,0.5)]"
            } p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
            onClick={activatePen}
          >
            <Pen />
          </button>
          <button
            className={`${
              isErasing && "shadow-[0_0_0_2px_rgba(255,255,255,0.5)]"
            } p-2 bg-gray-800 text-white rounded-md transition-all duration-300`}
            onClick={activateEraser}
          >
            <Eraser />
          </button>
        </div>
      </div>

      <Blackboard
        color={color}
        brushRadius={brushRadius}
        isErasing={isErasing}
        currentBoard={currentBoard}
        boards={boards}
        setBoards={setBoards}
      />

      <div className="fixed bottom-10 left-0 z-50 w-full flex flex-wrap justify-center text-white">
        <div className="flex items-center gap-6 text-3xl">
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
      </div>
    </div>
  );
}

export default App;
