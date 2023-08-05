import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const { handleOutTime } = props;
  const [count, setCount] = useState(90); // 90 seconds
  //const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    if (count === 0) {
      handleOutTime()
      return ;
    }
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000)


    //clean up
    return () => clearInterval(interval);
  }, [count,]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div>
      <h1>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h1>
      {/* {isStopped && <p>Countdown stopped</p>} */}
    </div>
  );
};

export default Timer;