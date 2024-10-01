import { createSlice } from "@reduxjs/toolkit";
import { getAnecdotes } from "../services/anecdoteService";

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

export const initAnecdotes = () => async (dispatch) => {
  const anecdotes = await getAnecdotes();
  dispatch(setAnecdotes(anecdotes));
};

export default anecdoteSlice.reducer;
