import { useState } from "react";
import './Range.scss'

const Range = () => {
  const [range, setRange] = useState(50);

  const handleRange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className="scale">
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        min="0"
        max="100"
        width=""
        value={range}
        onChange={handleRange}
      />

      <p>{range}%</p>
    </div>
  );
};

export default Range;
