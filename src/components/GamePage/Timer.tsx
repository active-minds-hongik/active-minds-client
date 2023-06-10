import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleCircleTimer from 'simple-circle-timer';
import '../../css/Timer.css';

const Timer = () => {
  const [count, setCount] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count === 0) {
      alert('게임 종료');
      navigate('/result1');
    }
  }, [count, navigate]);

  return (
    <div style={{ marginTop: '20px', marginRight: '20px'}}>
      <SimpleCircleTimer
        duration={60}
        size={130}
        strokeWidth={10}
        trailColor="#f3f3f3"
        showTime={false}
      />
    </div>
  );
};

export default Timer;
