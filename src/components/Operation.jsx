import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import {fetchQuote} from "../actions/quoteAction.js";

const Operation = () => { // КОМПОНЕНТ для выполнения операций пополнения и снятия средств
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();


  return (
    <>
      <div className={'flex justify-center mt-8'}>
        <button
          className={'bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'}
          onClick={() => dispatch(withdraw(sum))}
        >Withdraw
        </button>
        <input
          className={'text-center text-lg font-bold border rounded mx-4 text-white'}
          type='number'
          value={sum}
          onChange={e => setSum(Math.abs(+e.target.value))}
        />
        <button
          className={'bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'}
          onClick={() => dispatch(deposit(sum))}
        >Deposit
        </button>
      </div>

      <div className={'flex justify-center mt-6'}>
        <button
          className={'bg-yellow-500 hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded-lg'}
          onClick={() => dispatch(fetchQuote())}
        >Get Quote
        </button>
      </div>
    </>
  );
};

export default Operation;