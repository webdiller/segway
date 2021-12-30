const {useEffect, useState} = require('react');

function useInterval() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    const delayInterval = () => {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    };
    delayInterval(1);
    return () => clearInterval(interval);
  }, []);
  return {
    time
  };
}

export default useInterval;
