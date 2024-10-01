import axios from "axios";

const baseUrl = "/api/anecdotes";

export const getAnecdotes = async () => {
  const { data } = await axios.get(baseUrl);

  return data;
};

export const createAnecdote = async (body) => {
  const { data } = await axios.post(baseUrl, body);

  return data;
};
