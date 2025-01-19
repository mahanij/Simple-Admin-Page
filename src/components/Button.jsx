function Button({ name, operation, setCount, isAvailable, color }) {
  if (isAvailable) {
    const backgroundColor = color || "black";
    const buttonClass = `rounded-lg p-2 hover:opacity-75`;
    let textColor = "white";
    backgroundColor == "white" && "text-black";
    return (
      <button
        style={{ backgroundColor, textColor }}
        className={buttonClass}
        onClick={() => setCount((prevCount) => prevCount + operation)}
      >
        {" "}
        {name} : {operation}{" "}
      </button>
    );
  }
  return null;
}

export default Button;
