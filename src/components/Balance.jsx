import {useSelector} from "react-redux";

const Balance = () => { // КОМПОНЕНТ для отображения баланса пользователя
  const balance = useSelector(state => state.balance); // useSelector извлекает баланс из состояния Redux
  const quote = useSelector(state => state.quote); // useSelector извлекает цитату из состояния Redux

  return (
    <div className={'text-center text-uppercase'}>
      <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos</h1>
      <h3 className={'text-4xl text-[whitesmoke]'}>{quote}</h3>
      <h2 className={'text-6xl text-[firebrick]'}>Your balance: {balance}€</h2>
    </div>
  );
};

export default Balance;