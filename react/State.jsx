import React, { useState } from "react";

// comparison 1: STATE
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      count is {count}
    </button>
  );
}
















export default Counter;