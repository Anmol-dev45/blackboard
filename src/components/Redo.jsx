import { Redo as Icon } from "lucide-react";
import { useBoards } from "../context/boards";
import Button from "./Button";
const Redo = () => {
  const { canvasRef } = useBoards();
  const redo = () => canvasRef.current.redo();
  return <Button Icon={Icon} onClick={redo} />;
};

export default Redo;
