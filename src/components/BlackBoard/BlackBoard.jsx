import React, { useEffect } from "react";
import CustomCanvasDraw from "./CustomCanvasDraw"; // Use your new component
import { DEFAULT_ERASER_COLOR } from "../../constants";
import { useBoards } from "../../context/boards";

const Blackboard = () => {
  const {
    canvasRef,
    color,
    brushRadius,
    isErasing,
    currentBoard,
    boards,
    setBoards,
  } = useBoards();

  const saveCanvasData = () => {
    if (canvasRef.current) {
      const canvasData = canvasRef.current.getSaveData();
      setBoards((prev) => {
        const updatedBoards = [...prev];
        updatedBoards[currentBoard] = canvasData; // Save data to the correct board
        return updatedBoards;
      });
    }
  };

  const loadCanvasData = () => {
    if (canvasRef.current && boards[currentBoard]) {
      canvasRef.current.loadSaveData(boards[currentBoard], true);
    }
  };

  // Create a new board if it doesn't exist when switching to a new board
  useEffect(() => {
    canvasRef.current.clear();
    if (currentBoard + 1 > boards.length) {
      setBoards((prev) => [...prev, null]);
    } else {
      loadCanvasData();
    }
  }, [currentBoard, boards]);

  // Save the canvas data before the component unmounts or board changes
  useEffect(() => {
    return () => {
      saveCanvasData();
    };
  }, [currentBoard]);

  return (
    <>
      <CustomCanvasDraw
        ref={canvasRef}
        brushColor={isErasing ? DEFAULT_ERASER_COLOR : color}
        brushRadius={Number(brushRadius)}
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight}
        hideGrid={true}
        backgroundColor={DEFAULT_ERASER_COLOR}
        eraseMode={isErasing} // Enables erasing mode
      />
    </>
  );
};

export default Blackboard;
