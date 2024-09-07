import { useBoards } from "../context/boards";
import Button from "./Button";
import { MoveLeft, MoveRight } from "lucide-react";
const Pagination = () => {
  const { currentBoard, setCurrentBoard } = useBoards();
  return (
    <div className="flex items-center gap-8 text-3xl text-white">
      <Button
        Icon={MoveLeft}
        onClick={() => {
          setCurrentBoard((prev) => Math.max(prev - 1, 0));
        }}
        disabled={currentBoard === 0}
      />
      <span className="font-semibold font-mono">{currentBoard + 1}</span>
      <Button
        Icon={MoveRight}
        onClick={() => {
          setCurrentBoard((prev) => prev + 1);
        }}
      />
    </div>
  );
};

export default Pagination;
