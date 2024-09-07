import { Undo as Icon } from "lucide-react";
import { useBoards } from "../context/boards";
import Button from "./Button";
const Undo = () => {
  const { canvasRef } = useBoards();
  const undo = () => canvasRef.current.undo();
  return <Button Icon={Icon} onClick={undo} />;
};

export default Undo;
