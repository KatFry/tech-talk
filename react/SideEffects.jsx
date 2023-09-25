function Counter () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count is ${count}`;
  }, [count]);
}

// create sideEffect with useEffect hook
// watches count because it's in the dependency array 