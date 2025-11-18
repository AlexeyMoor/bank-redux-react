import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
  'quote/fetch',
  async () => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
    const data = await response.json();
    return data.sentence;
  }
);