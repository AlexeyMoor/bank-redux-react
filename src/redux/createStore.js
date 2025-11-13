export const createStore = (reducer, initialState) => {
  let state = initialState;
  let subscribers = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach((subscriber) => subscriber());
  }
  const subscribe = listener => {
    subscribers.push(listener);
    return () => subscribers = subscribers.filter(sub => sub !== listener);
  }

  return {getState, dispatch, subscribe};
};