import {putQuote} from "../quote/quoteSlice.js";

export const fetchQuote = () => {
  return async dispatch => {
    dispatch(putQuote('Loading...'));
    try {
      const res = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
      const data = await res.json();
      dispatch(putQuote(data.sentence));
    } catch {
      dispatch(putQuote('Error fetching quote'));
    }
  };
};