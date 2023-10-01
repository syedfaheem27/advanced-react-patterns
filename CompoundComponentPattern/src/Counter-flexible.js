import { createContext, useContext, useState } from "react";

const counterContext = createContext({});

function Counter({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider
      value={{
        counter,
        increase() {
          setCounter((c) => c + 1);
        },
        decrease() {
          setCounter((c) => c - 1);
        },
      }}
    >
      {children}
    </counterContext.Provider>
  );
}

const count = function () {
  const { counter } = useContext(counterContext);
  return <span>{counter}</span>;
};
const label = function ({ label }) {
  return <span>{label}</span>;
};
const increase = function ({ icon }) {
  const { increase } = useContext(counterContext);
  return <button onClick={increase}>{icon}</button>;
};
const decrease = function ({ icon }) {
  const { decrease } = useContext(counterContext);
  return <button onClick={decrease}>{icon}</button>;
};

Counter.Count = count;
Counter.Label = label;
Counter.Increase = increase;
Counter.Decrease = decrease;

export default Counter;
