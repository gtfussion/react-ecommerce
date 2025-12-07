// //Without useCallback:
import { useMemo, useState } from "react";
import { increment } from "../slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const Test = () => {
  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch();


  const [todos, setTodos] = useState([]);
  // console.log("page init");
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);
  // console.log("calculation finished");

  const incrementHandler = () => {
    // setCount((c) => c + 1);
    dispatch(increment());
  };
  const addTodo = () => {
    // setTodos((t) => [...t, "New Todo"]);
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
        <button className="border-2 p-4" onClick={incrementHandler}>
          +
        </button>
        <h2>Expensive Calculation</h2>
        {/* {calculation} */}
        <p>
          Note that this example executes the expensive function also when you
          click on the Add Todo button.
        </p>
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
