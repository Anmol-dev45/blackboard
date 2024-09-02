import { useRef, useState } from "react";
import Blackboard from "./components/BlackBoard/BlackBoard";
import { DEFAULT_BRUSH_RADIUS, DEFAULT_PEN_COLOR } from "./constants";

import { BoardsContext } from "./context/boards";
import Toolbar from "./components/Toolbar";
import Pagination from "./components/Pagination";

function App() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState(DEFAULT_PEN_COLOR);
  const [brushRadius, setBrushRadius] = useState(DEFAULT_BRUSH_RADIUS);
  const [isErasing, setIsErasing] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(0);
  const [boards, setBoards] = useState([null]);

  return (
    <BoardsContext.Provider
      value={{
        canvasRef,
        boards,
        brushRadius,
        color,
        isErasing,
        currentBoard,
        setColor,
        setIsErasing,
        setBoards,
        setCurrentBoard,
        setBrushRadius,
      }}
    >
      <div className="relative h-screen w-screen">
        <div className="fixed top-4 left-4 z-10">
          <Toolbar />
        </div>
        <Blackboard />
        <div className="fixed bottom-10 left-0 z-50 w-full flex flex-wrap justify-center">
          <Pagination />
        </div>
      </div>
    </BoardsContext.Provider>
  );
}

export default App;
