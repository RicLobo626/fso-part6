import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.sort((a, b) => b.votes - a.votes));

  const handleVote = (id) => () => dispatch(voteAnecdote(id));

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={handleVote(anecdote.id)}>vote</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnecdoteList;
