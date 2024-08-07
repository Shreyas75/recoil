// components/Counter.jsx
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState } from '../store/atoms/countState';

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const isEven = useRecoilValue(countIsEven);

  return (
    <div>
        hello
    </div>
  );
};

export default Counter;