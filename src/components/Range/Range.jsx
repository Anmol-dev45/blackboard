import React, { useEffect, useRef } from "react";
import "./Range.css";
const Range = ({ value, setBrushRadius }) => {
  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setBrushRadius(newValue);
    const progress =
      ((newValue - e.target.min) / (e.target.max - e.target.min)) * 100;

    // Set the background gradient
    ref.current.style.background = `linear-gradient(to right, #979797 ${progress}%, #ffffff ${progress}%)`;
  };

  useEffect(() => {
    const progress =
      ((value - ref.current.min) / (ref.current.max - ref.current.min)) * 100;
    ref.current.style.background = `linear-gradient(to right, #979797 ${progress}%, #ffffff ${progress}%)`;
  }, [value]);

  const ref = useRef(null);
  return (
    <div className="py-16 -rotate-[90deg] ">
      <input
        ref={ref}
        type="range"
        min="1"
        max="20"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Range;
