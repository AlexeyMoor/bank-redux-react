import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../api/quoteAction.js";

const quoteSlice = createSlice({
  name: 'quote',
  initialState: 'Winter is coming...',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuote.pending, () => 'Loading...') // pending это статус когда запрос в процессе выполнения
      .addCase(fetchQuote.rejected, () => 'Error fetching quote.') // rejected это статус когда запрос завершился с ошибкой
      // fulfilled это статус когда запрос успешно завершился
      .addCase(fetchQuote.fulfilled, (state, action) => action.payload);
  }
})

export default quoteSlice.reducer;