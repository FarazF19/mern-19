import React from "react";
import { useState } from "react";
import Counter from "../components/Counter";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState(["Jeans", "Shirts"]);

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const addItemHandler = () => {
    setItems([...items, userInput]);
    setUserInput("");
  };
  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter an item"
      />
      <button onClick={addItemHandler}>Add Item</button>
      {/* {items.map((item, index, arr) => {
        return (
          <Counter
            key={index}
            itemName={item}
            xyz={() => {
              const updatedItems = [
                ...items.slice(0, index),
                ...items.slice(1 + index),
              ];
              setItems(updatedItems);
            }}
          />
        );
      })} */}
    </>
  );
}

export default Home;
