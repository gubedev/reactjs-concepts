import React from "react";

const CountContext = React.createContext();

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}

function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>The current counter count is {count}</div>;
}

function ContextCounter() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default ContextCounter;
