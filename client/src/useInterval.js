import { useEffect, useRef } from 'react';

const useInterval = (callback, delay, enabled) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (enabled) {
      const intervalId = setInterval(tick, delay);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [delay, enabled]);
};

export default useInterval;
