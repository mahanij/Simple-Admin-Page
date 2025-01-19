function Button({ name, operation, setCount, isAvailable, color }) {
    if (isAvailable) {
      const backgroundColor = color || "black";
      const buttonClass = `rounded-lg p-2 hover:opacity-75`;
      const textColor = backgroundColor === "white" ? "black" : "white"; // Determining text color based on background
  
      return (
        <button
          style={{ backgroundColor, color: textColor }} // Correctly applying textColor here
          className={buttonClass}
          onClick={() => setCount((prevCount) => prevCount + operation)}
        >
          {name} : {operation}
        </button>
      );
    }
    return null;
  }
  
  export default Button;
  