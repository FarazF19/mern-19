import { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>Count:{count}</h1>
      <button onClick={handleCount}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
