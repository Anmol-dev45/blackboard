import { Eraser as Icon } from "lucide-react";
import { useBoards } from "../../context/boards";
import Button from "../Button";

const Eraser = () => {
  const { isErasing, setIsErasing } = useBoards();
  return (
    <Button
      onClick={() => {
        setIsErasing(true);
      }}
      Icon={Icon}
      selected={isErasing}
    />
  );
};

export default Eraser;
