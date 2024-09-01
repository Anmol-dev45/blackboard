import { createContext, useContext } from "react";
import { DEFAULT_BRUSH_RADIUS, DEFAULT_PEN_COLOR } from "../constants";

export const BoardsContext = createContext({
  boards: [null],
  currentBoard: 0,
  isErasing: false,
  color: DEFAULT_PEN_COLOR,
  brushRadius: DEFAULT_BRUSH_RADIUS,
  setCurrentBoard: () => {},
  setBoards: () => {},
  setIsErasing: () => {},
  setColor: () => {},
  setBrushRadius: () => {},
});

export const useBoards = () => useContext(BoardsContext);
