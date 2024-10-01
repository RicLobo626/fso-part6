import { createSlice } from "@reduxjs/toolkit";
import {
  createAnecdote,
  getAnecdotes,
  updateAnecdote,
} from "../services/anecdoteService";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    changeAnecdote: (state, { payload }) => {
      const idx = state.findIndex(({ id }) => id === payload.id);
      state[idx] = payload;
    },
    appendAnecdote: (state, { payload }) => {
      state.push(payload);
    },
    setAnecdotes: (_state, { payload }) => payload,
  },
});

export const { changeAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initAnecdotes = () => async (dispatch) => {
  const anecdotes = await getAnecdotes();
  dispatch(setAnecdotes(anecdotes));
};

export const createAndAppendAnecdote = (body) => async (dispatch) => {
  const anecdote = await createAnecdote(body);
  dispatch(appendAnecdote(anecdote));
};

export const voteAndUpdateAnecdote = ({ id, ...anecdote }) => {
  return async (dispatch) => {
    const updatedAnecdote = await updateAnecdote(id, {
      ...anecdote,
      votes: anecdote.votes + 1,
    });

    dispatch(changeAnecdote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
