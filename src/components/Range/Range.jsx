import React, { useCallback, useEffect, useRef } from "react";
import "./Range.css";
import { useBoards } from "../../context/boards";
const Range = () => {
  const { brushRadius, setBrushRadius } = useBoards();
  const ref = useRef(null);

  const onChangeHandler = useCallback(
    (e) => {
      const newValue = e.target.value;
      setBrushRadius(newValue);
      const progress =
        ((newValue - e.target.min) / (e.target.max - e.target.min)) * 100;

      // Set the background gradient
      ref.current.style.background = `linear-gradient(to right, #979797 ${progress}%, #ffffff ${progress}%)`;
    },
    [setBrushRadius, ref]
  );

  useEffect(() => {
    const progress =
      ((value - ref.current.min) / (ref.current.max - ref.current.min)) * 100;
    ref.current.style.background = `linear-gradient(to right, #979797 ${progress}%, #ffffff ${progress}%)`;
  }, [brushRadius]);

  return (
    <div className="py-16 -rotate-[90deg] ">
      <input
        ref={ref}
        type="range"
        min="1"
        max="20"
        value={brushRadius}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Range;
