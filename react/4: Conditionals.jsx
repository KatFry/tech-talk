// Comparison 4: CONDITIONAL LOGIC
function Counter() {
  const [count, setCount] = useState(0);

  return <>
    {count > 100 ? (
    <p>big</p> 
    ) : count > 50 ? (
      <p>medium</p>
    ) : (
    <p>small</p>
    )}
  </>;
}

// occasionally see nightmares like this of nested ternaries 
// although you can do this in better ways 