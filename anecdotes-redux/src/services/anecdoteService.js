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

export const updateAnecdote = async (id, body) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, body);

  return data;
};
