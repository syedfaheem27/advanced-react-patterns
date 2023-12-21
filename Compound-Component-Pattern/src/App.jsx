// import AccordionContainer from "./accordion/AccordionContainer";
import Counter from "./counter/Counter";

// import Items from "./modal/Items";

const App = () => {
  return (
    <Counter>
      <Counter.Label>Counter using compound component pattern</Counter.Label>
      <Counter.Increment icon="+" />
      <Counter.Count />
      <Counter.Decrement icon="-" />
    </Counter>
  );
};

// const App = () => {
//   return <AccordionContainer />;
// };

// const App = () => {
//   return <Items />;
// };

export default App;
