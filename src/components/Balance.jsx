import {store} from "../configureStore/store.js";
import {useSyncExternalStore} from "react";

const Balance = () => {
  const {balance} = useSyncExternalStore(store.subscribe, store.getState); // подписываемся на изменения стора и получаем актуальный стейт

  return (
    <div>
      <h1>Bank</h1>
      <h2>Your balance: {balance}€</h2>
    </div>
  );
};

export default Balance;