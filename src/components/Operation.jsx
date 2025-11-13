import {useState} from "react";

const Operation = ({deposit, withdraw}) => {
  const [sum, setSum] = useState(0);


  return (
    <div>
      <button onClick={() => withdraw(sum)}>Withdraw</button>
      <input
        type='number'
        value={sum}
        onChange={e => setSum(+e.target.value)}
      />
      <button onClick={() => deposit(sum)}>Deposit</button>
    </div>
  );
};

export default Operation;