import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState(["Jeans", "Shirts"]);

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const addItemHandler = () => {
    setItems([...items, userInput]);
  };
  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter an item"
      />
      <button onClick={addItemHandler}>Add Item</button>
      {items.map((item, index, arr) => {
        return <Counter key={index} itemName={item} />;
      })}
      <Counter itemName="Shirt" />
    </>
  );
}

export default App;
