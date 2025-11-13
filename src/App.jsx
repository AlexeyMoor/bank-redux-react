import {useState} from 'react'
import './App.css'
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";

function App() {
  const [balance, setBalance] = useState(0)

  const withdraw = amount => setBalance(prevBalance => prevBalance >= amount ? prevBalance - amount : prevBalance);
  const deposit = amount => setBalance(prevBalance => prevBalance + amount);

  return (
    <div>
      <Balance balance={balance} />
      <Operation deposit={deposit} withdraw={withdraw} />
    </div>
  )
}

export default App
