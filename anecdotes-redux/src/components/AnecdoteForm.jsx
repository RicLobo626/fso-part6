import { useDispatch } from "react-redux";
import { setAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";
import { createAnecdote } from "../services/anecdoteService";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.anecdote.value;

    if (!content) return;

    const anecdote = await createAnecdote({ content, votes: 0 });

    dispatch(setAnecdote(anecdote));
    dispatch(showNotification(`Anecdote '${content}' created`));
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
