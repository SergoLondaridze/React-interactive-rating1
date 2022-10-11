import './reset.css';
import './style.css';
import Card from './Card';
import { useState } from 'react';
import Result from './Thank';
import Thank from './Thank';
function App() {
  const [rate, setRate] = useState(null)
  const [visable, setVisable] = useState(false)
  function submit() {
    if (rate !== null) {
      setVisable(true)
    }
  }
  return (
    <div className="container">
      {!visable && <Card submit={submit} rate={setRate} />}
      {visable && <Thank rate={rate} />}
    </div>
  );
}

export default App;
