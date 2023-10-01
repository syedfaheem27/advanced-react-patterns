import { useState } from "react";

function Counter(props) {
  const {
    iconIncrease,
    iconDecrease,
    label,
    hideLabel,
    hideIncrease,
    hideDecrease,
    labelPos = "start",
  } = props;

  const [counter, setCounter] = useState(0);
  const increase = () => setCounter((c) => c + 1);
  const decrease = () => setCounter((c) => c - 1);

  const markup = (
    <>
      {!hideDecrease && <button onClick={decrease}>{iconDecrease}</button>}
      <span>{counter}</span>
      {!hideIncrease && <button onClick={increase}>{iconIncrease}</button>}
    </>
  );

  if (labelPos === "start")
    return (
      <div>
        {!hideLabel && <span>{label}</span>}
        {markup}
      </div>
    );

  if (labelPos === "end")
    return (
      <div>
        {markup}
        {!hideLabel && <span>{label}</span>}
      </div>
    );
}
export default Counter;
