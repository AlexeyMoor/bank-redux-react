export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuote = quote => ({
  type: PUT_QUOTE,
  payload: quote,
});

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