import React, {useState} from 'react';
import { Header } from '../Header';
import { Chart } from '../Chart';
import './index.css';

function App() {
  const [coinSelected, setCoinSelected] = useState("BTC");
  return (
    <div className="App">
      <Header onSelected={(coin) => setCoinSelected(coin)}/>
      <Chart coin={coinSelected}/>
    </div>
  );
}

export default App;
