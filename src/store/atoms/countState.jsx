// store/atoms/countState.jsx
import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const isEvenSelector = selector({
    key: 'isEvenSelector',
    get: ({get}) => {
        const count = get(countState);
        return (count%2 ==0);
    }
})