import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { getAnecdotes } from "./services/anecdoteService";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAndSetAnecdotes = async () => {
      const anecdotes = await getAnecdotes();
      dispatch(setAnecdotes(anecdotes));
    };

    getAndSetAnecdotes();
  });

  return (
    <main>
      <Notification />

      <h2>Anecdotes</h2>

      <Filter />

      <AnecdoteList />

      <h2>create new</h2>

      <AnecdoteForm />
    </main>
  );
};

export default App;
