import { useState, useCallback } from "react";

const MAX_WINDOW_SIZE = 10;

export const useNumberWindow = () => {
  const [windowState, setWindowState] = useState([]);

  const updateWindow = useCallback(
    (newNumbers) => {
      const prevState = [...windowState];

      const uniqueNewNumbers = newNumbers.filter(
        (num) => !windowState.includes(num)
      );

      let newState = [...windowState, ...uniqueNewNumbers];

      if (newState.length > MAX_WINDOW_SIZE) {
        newState = newState.slice(-MAX_WINDOW_SIZE);
      }

      setWindowState(newState);

      return {
        windowPrevState: prevState,
        windowCurrState: newState,
        numbers: uniqueNewNumbers,
        avg: calculateAverage(newState),
      };
    },
    [windowState]
  );

  return { windowState, updateWindow };
};

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};
