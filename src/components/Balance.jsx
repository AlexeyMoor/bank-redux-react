import {useSelector} from "react-redux";
import Bank from "./Bank.jsx";
import {getBank, getRandomIndex, names} from "../utils/constants.js";
import {useCallback} from "react";

const Balance = () => { // КОМПОНЕНТ для отображения баланса пользователя
  const balance = useSelector(state => state.balance); // useSelector извлекает баланс из состояния Redux
  const quote = useSelector(state => state.quote); // useSelector извлекает цитату из состояния Redux
  const index = getRandomIndex(names.length)
  const info = useCallback(index => getBank(index), []); // useCallback мемоизирует функцию получения информации о банке


  console.log(`Render Balance index: ${index}`);

  return (
    <div className={'text-center text-uppercase'}>
      <Bank info={info} index={index} />
      <h3 className={'text-4xl text-[whitesmoke]'}>{quote}</h3>
      <h2 className={'text-6xl text-[firebrick]'}>Your balance: {balance}€</h2>
    </div>
  );
};

export default Balance;