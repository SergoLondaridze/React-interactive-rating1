import './reset.css';
import './style.css';
import Card from './Card';
import { useState } from 'react';
import Result from './Thank';
import Thank from './Thank';
function App() {
  const [rate, setRate] = useState(null)
  const [rated, setRated] = useState(false)
  function submit() {
    if (rate !== null) {
      setRated(true)
    }
  }
  return (
    <div className="container">
      {!rated && <Card submit={submit} rate={setRate} />}
      {rated && <Thank rate={rate} />}
    </div>
  );
}

export default App;
