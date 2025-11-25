import {useSelector} from "react-redux";
import Bank from "./Bank.jsx";
import {useMemo} from "react";
import {getRandomIndex, names} from "../utils/constants.js";

const Balance = () => { // КОМПОНЕНТ для отображения баланса пользователя
  const balance = useSelector(state => state.balance); // useSelector извлекает баланс из состояния Redux
  const quote = useSelector(state => state.quote); // useSelector извлекает цитату из состояния Redux
  const index = getRandomIndex(names.length)
  const info = useMemo(() => ({name: names[index]}), [index]);


  console.log(`Render Balance index: ${index}`);

  return (
    <div className={'text-center text-uppercase'}>
      <Bank info={info} />
      <h3 className={'text-4xl text-[whitesmoke]'}>{quote}</h3>
      <h2 className={'text-6xl text-[firebrick]'}>Your balance: {balance}€</h2>
    </div>
  );
};

export default Balance;