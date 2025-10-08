// //Without useCallback:
import { useMemo, useState } from "react";

// // Child component that receives a function prop
// const Button = React.memo(({ onClick, text }) => {
//   console.log(`Child ${text} button rendered`);
//   return <button onClick={onClick}>{text}</button>;
// });

// // Parent component without useCallback
// export function Test() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // This function is recreated on every render
//   const handleClick1 = useCallback(() => {
//     setCount1(count1 + 1);
//   }, [count1]);

//   const handleClick2 = useCallback(() => {
//     setCount2(count2 + 1);
//   }, [count2]);

//   console.log(`parenr rendered`);

//   return (
//     <div>
//       <h2>Without useCallback:</h2>
//       <p>Count 1: {count1}</p>
//       <p>Count 2: {count2}</p>
//       <Button onClick={() => handleClick1()} text="Button 1" />
//       <Button onClick={() => handleClick2()} text="Button 2" />
//     </div>
//   );
// }

export const Test = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log("page init");
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  console.log("calculation finished");

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button className="border-2 p-4" onClick={increment}>
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <p>
          Note that this example executes the expensive function also when you
          click on the Add Todo button.
        </p>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
