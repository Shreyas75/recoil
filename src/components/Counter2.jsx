import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState, isEvenSelector } from '../store/atoms/countState';

const Counter2 = () => {
    const [count, setCount] = useRecoilState(countState);

    const countValue = useRecoilValue(countState)
    const handleIncrease = () => {
      setCount(count + 1);
    };
  
    const handleDecrease = () => {
      setCount(count - 1);
    };

    const isEven = useRecoilValue(isEvenSelector)


  return (
    <div>
        <h1>Count: {countValue}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <div>
            {isEven ? "Even" : ""}

        </div>
    </div>
  )
}

export default Counter2