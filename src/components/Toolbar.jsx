import Clear from "./Clear/Clear";
import Pen from "./Pen/Pen";
import ColorPicker from "./ColorPicker/ColorPicker";
import Eraser from "./Eraser/Eraser";
import Range from "./Range/Range";

const Toolbar = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-7 ml-3">
      <Clear />
      <ColorPicker />
      <Range />
      <Pen />
      <Eraser />
    </div>
  );
};

export default Toolbar;
