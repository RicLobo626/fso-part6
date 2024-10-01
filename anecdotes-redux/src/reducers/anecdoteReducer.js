import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote: (state, { payload: id }) => {
      const anecdote = state.find((a) => a.id === id);
      anecdote.votes++;
    },
    createAnecdote: (state, { payload: content }) => {
      state.push({ content, id: getId(), votes: 0 });
    },
    setAnecdotes: (_state, { payload }) => payload,
  },
});

export const { voteAnecdote, createAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
