import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const [count, setCount] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(id);
      alert('게임 종료');
      navigate('/result1');
    }
    return () => clearInterval(id);
  }, [count]);

  return <div>남은 시간: {count}초</div>;
};

export default Timer;
