import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote: (state, { payload: id }) => {
      const anecdote = state.find((a) => a.id === id);
      anecdote.votes++;
    },
    setAnecdote: (state, { payload }) => {
      state.push(payload);
    },
    setAnecdotes: (_state, { payload }) => payload,
  },
});

export const { voteAnecdote, setAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
