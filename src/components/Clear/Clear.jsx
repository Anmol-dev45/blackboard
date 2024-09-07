import { useBoards } from "../../context/boards";
import { ShieldMinus } from "lucide-react";
import Button from "../Button";
const Clear = () => {
  const { canvasRef, currentBoard, setBoards } = useBoards();
  const clearBoard = () => {
    canvasRef.current.clear();
    setBoards((prev) => {
      const updatedBoards = [...prev];
      updatedBoards[currentBoard] = null;
      return updatedBoards;
    });
  };
  return <Button onClick={clearBoard} Icon={ShieldMinus} />;
};

export default Clear;
