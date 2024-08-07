
import { RecoilRoot } from 'recoil';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter2 />
      </RecoilRoot>
    </div>
  );
}

export default App;