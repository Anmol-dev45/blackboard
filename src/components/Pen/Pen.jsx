import { Pen as Icon } from "lucide-react";
import { useBoards } from "../../context/boards";
import Button from "../Button";

const Pen = () => {
  const { isErasing, setIsErasing } = useBoards();
  return (
    <Button
      Icon={Icon}
      onClick={() => setIsErasing(false)}
      selected={!isErasing}
    />
  );
};

export default Pen;
