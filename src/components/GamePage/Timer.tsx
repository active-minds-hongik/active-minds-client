import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(id);
      alert('게임 종료');
      navigate('/result');
    }
    return () => clearInterval(id);
  }, [count]);

  return <div>{count}</div>;
};

export default Timer;
