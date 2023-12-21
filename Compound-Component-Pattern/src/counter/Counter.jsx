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
  return <span style={{ fontSize: '1.3rem' }}>{count}</span>;
};

const Increment = ({ icon }) => {
  const { increaseCount } = useContext(CounterContext);
  return <button style={{
    padding: '0.1em 0.4em',
    margin: '0 1em'
  }} onClick={increaseCount}>{icon}</button>;
};

const Decrement = ({ icon }) => {
  const { decreaseCount } = useContext(CounterContext);
  return <button style={{
    padding: '0.1em 0.4em',
    margin: '0 1em'
  }} onClick={decreaseCount}>{icon}</button>;
};

//4. Add child components as properties to the parent
Counter.Label = Label;
Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
