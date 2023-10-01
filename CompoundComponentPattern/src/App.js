import Counter from "./Counter-flexible";
import "./styles.css";

// Implementation of compound comnponent pattern

//Here we can easily rearrange the components and get a customizable counter

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Counter.Label label="My flexible counter" />
        <Counter.Increase icon="+" />
        <Counter.Count />
        <Counter.Decrease icon="-" />
      </Counter>
    </div>
  );
}
