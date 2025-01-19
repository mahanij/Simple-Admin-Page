import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [operation, setOperation] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    const newOperation = {
      name: e.target.title.value,
      value: JSON.parse(e.target.operation.value),
      color: e.target.color.value,
      isAvailable: true,
    };
    setOperation([newOperation, ...operation]);
    e.target.reset();
  }

  return (
    <div className="p-6 flex flex-col gap-10 max-w-md mx-auto justify-center">
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <label htmlFor="operation" className="text-lg font-medium">
          Enter the operation:
        </label>
        <input
          type="number"
          name="operation"
          className="bg-gray-200 p-2 rounded-md"
        />

        <label htmlFor="title" className="text-lg font-medium">
          Enter the name of button:
        </label>
        <input
          type="text"
          name="title"
          className="bg-gray-200 p-2 rounded-md"
        />

        <label htmlFor="color" className="text-lg font-medium">
          Enter the color of the button:
        </label>
        <input
          type="text"
          name="color"
          className="bg-gray-200 p-2 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
        >
          Send
        </button>
      </form>

      <div className="flex flex-wrap gap-4">
        {operation.map((value, index) => (
          <Button
            key={index}
            color={value.color}
            name={value.name}
            operation={value.value}
            setCount={setCount}
            isAvailable={value.isAvailable}
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold text-center">{count}</h1>
    </div>
  );
}

export default App;
