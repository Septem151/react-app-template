import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked: {count} times
    </button>
  );
};

export default App;
