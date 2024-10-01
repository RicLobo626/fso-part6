import { createSlice } from "@reduxjs/toolkit";
import { createAnecdote, getAnecdotes } from "../services/anecdoteService";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote: (state, { payload: id }) => {
      const anecdote = state.find((a) => a.id === id);
      anecdote.votes++;
    },
    appendAnecdote: (state, { payload }) => {
      state.push(payload);
    },
    setAnecdotes: (_state, { payload }) => payload,
  },
});

export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initAnecdotes = () => async (dispatch) => {
  const anecdotes = await getAnecdotes();
  dispatch(setAnecdotes(anecdotes));
};

export const createAndAppendAnecdote = (body) => async (dispatch) => {
  const anecdote = await createAnecdote(body);
  dispatch(appendAnecdote(anecdote));
};

export default anecdoteSlice.reducer;
