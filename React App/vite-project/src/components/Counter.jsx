import { useEffect, useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    //console.log("UseEffect Ran for count value: ", count);
    // return () => {
    //   console.log("Cleanup for count", count);
    // };
  }, []);

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
      <button onClick={props.xyz}>Delete</button>
    </>
  );
}

export default Counter;
