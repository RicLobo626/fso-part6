import { useDispatch } from "react-redux";
import { createAndAppendAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.anecdote.value;

    if (!content) return;

    dispatch(createAndAppendAnecdote({ content, votes: 0 }));
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
