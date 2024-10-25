import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { initAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAnecdotes());
  }, []);

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
