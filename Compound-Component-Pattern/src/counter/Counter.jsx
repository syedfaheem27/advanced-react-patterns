import { createContext, useContext, useState } from "react";

//1. Create context
const CounterContext = createContext();

//2. Providde context
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {children}
    </CounterContext.Provider>
  );
};

//3. Create Child components to help implement the pattern
const Label = ({ children }) => {
  return <h1>{children}</h1>;
};

const Count = () => {
  const { count } = useContext(CounterContext);
  return <div>{count}</div>;
};

const Increment = ({ icon }) => {
  const { increaseCount } = useContext(CounterContext);
  return <button onClick={increaseCount}>{icon}</button>;
};

const Decrement = ({ icon }) => {
  const { decreaseCount } = useContext(CounterContext);
  return <button onClick={decreaseCount}>{icon}</button>;
};

//4. Add child components as properties to the parent
Counter.Label = Label;
Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
