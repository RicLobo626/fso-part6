import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = e.target.anecdote.value;

    if (!content) return;

    dispatch(createAnecdote(content));

    e.target.anecdote.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="anecdote">
        <input type="text" id="anecdote" name="anecdote" />
      </label>
      <button>create</button>
    </form>
  );
};

export default AnecdoteForm;
