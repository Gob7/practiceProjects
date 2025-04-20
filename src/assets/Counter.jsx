import { useState } from "react";
import "./Counter.module.css";

export default function Counter({ initCount = 0 }) {
  const [count, setCount] = useState(initCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > initCount ? count - 1 : initCount);
  const reset = () => setCount(initCount);

  return (
    <main>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>C</button>
    </main>
  );
}
