import {useSelector} from "react-redux";
import Bank from "./Bank.jsx";
import {useState} from "react";

const Balance = () => { // КОМПОНЕНТ для отображения баланса пользователя
  const balance = useSelector(state => state.balance); // useSelector извлекает баланс из состояния Redux
  const quote = useSelector(state => state.quote); // useSelector извлекает цитату из состояния Redux
  // const info = {name: 'Braavos'}
  const [info] = useState({name: 'Braavos'});

  console.log('Render Balance');

  return (
    <div className={'text-center text-uppercase'}>
      <Bank info={info}/>
      <h3 className={'text-4xl text-[whitesmoke]'}>{quote}</h3>
      <h2 className={'text-6xl text-[firebrick]'}>Your balance: {balance}€</h2>
    </div>
  );
};

export default Balance;