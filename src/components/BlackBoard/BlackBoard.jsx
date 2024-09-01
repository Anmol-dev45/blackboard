import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { DEFAULT_ERASER_COLOR } from "../../constants";
import { useBoards } from "../../context/boards";

const Blackboard = () => {
  const { color, brushRadius, isErasing, currentBoard, boards, setBoards } =
    useBoards();
  const ref = useRef();

  const saveCanvasData = () => {
    if (ref.current) {
      console.log("saved");
      const canvasData = ref.current.getSaveData();
      setBoards((prev) => {
        const updatedBoards = [...prev];
        updatedBoards[currentBoard] = canvasData; // Save data to the correct board
        return updatedBoards;
      });
    }
  };

  const loadCanvasData = () => {
    if (ref.current && boards[currentBoard]) {
      console.log("load");
      ref.current.loadSaveData(boards[currentBoard], true);
    }
  };

  // Create a new board if it doesn't exist when switching to a new board
  useEffect(() => {
    console.log(boards);
    ref.current.clear();
    if (currentBoard + 1 > boards.length) {
      setBoards((prev) => [...prev, null]);
    } else {
      loadCanvasData();
    }
  }, [currentBoard, boards]);

  // Save the canvas data before the component unmounts or board changes
  useEffect(() => {
    console.log(ref);
    return () => {
      saveCanvasData();
    };
  }, [currentBoard]);

  return (
    <CanvasDraw
      ref={ref}
      brushColor={isErasing ? DEFAULT_ERASER_COLOR : color}
      brushRadius={Number(brushRadius)}
      canvasWidth={window.innerWidth}
      canvasHeight={window.innerHeight}
      hideGrid={true}
      backgroundColor={DEFAULT_ERASER_COLOR}
      eraseMode={isErasing} // Enables erasing mode
    />
  );
};

export default Blackboard;
