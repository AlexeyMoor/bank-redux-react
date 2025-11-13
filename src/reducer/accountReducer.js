import {DEPOSIT, WITHDRAW} from "../actions/accountActions.js";

export const accountReducer = (state, action) => {
  switch (action.type) {
    case DEPOSIT: // Deposit принимает сумму и увеличивает баланс на эту сумму
      return {...state, balance: state.balance + action.payload};
    case WITHDRAW: // Withdraw уменьшает баланс на эту сумму, если хватает средств
      return {...state, balance: state.balance >= action.payload ? state.balance - action.payload : state.balance};
    default:
      return state;
  }
}