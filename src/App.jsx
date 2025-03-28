import { useState } from "react";
import { fetchNumbers } from "./services/numberService";
import { useNumberWindow } from "./hooks/useNumberWindow";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updateWindow } = useNumberWindow();

  const handleFetchNumbers = async (type) => {
    try {
      setLoading(true);
      setError(null);

      const numbers = await fetchNumbers(type);
      const result = updateWindow(numbers);
      setResult(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Average Calculator Microservice</h1>

      <div className="button-group">
        <button onClick={() => handleFetchNumbers("p")}>Prime Numbers</button>
        <button onClick={() => handleFetchNumbers("f")}>
          Fibonacci Numbers
        </button>
        <button onClick={() => handleFetchNumbers("e")}>Even Numbers</button>
        <button onClick={() => handleFetchNumbers("r")}>Random Numbers</button>
      </div>

      {loading && <div className="loading">Loading...</div>}

      {error && <div className="error">Error: {error}</div>}

      {result && (
        <div className="result">
          <h2>Results</h2>
          <div className="result-item">
            <h3>Previous Window State:</h3>
            <p>[{result.windowPrevState.join(", ")}]</p>
          </div>
          <div className="result-item">
            <h3>Current Window State:</h3>
            <p>[{result.windowCurrState.join(", ")}]</p>
          </div>
          <div className="result-item">
            <h3>New Numbers:</h3>
            <p>[{result.numbers.join(", ")}]</p>
          </div>
          <div className="result-item">
            <h3>Average:</h3>
            <p>{result.avg.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
