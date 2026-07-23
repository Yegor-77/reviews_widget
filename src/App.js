import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = (type) => {
    setState({
      ...state,
      [type]: state[type] + 1,
    });
  };

  return (
    <div>
      <h1>Feedback Widget</h1>

      <button onClick={() => leaveFeedback("good")}>
        Good
      </button>

      <button onClick={() => leaveFeedback("neutral")}>
        Neutral
      </button>

      <button onClick={() => leaveFeedback("bad")}>
        Bad
      </button>

      <h2>Statistics</h2>

      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
    </div>
  );
}

export default App;