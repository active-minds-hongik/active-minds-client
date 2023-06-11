import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = () => {
  const [count, setCount] = useState(60);
  const navigate = useNavigate();

  const onComplete = () => {
    alert('게임 종료');
    navigate('/result1');
  };

  return (
    <div
      style={{ marginTop: '20px', marginRight: '20px', marginBottom: ' 20px' }}
    >
      <CountdownCircleTimer
        isPlaying
        duration={count}
        colors="#A30000"
        onComplete={onComplete}
        size={80}
      >
        {({ remainingTime }: any) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
