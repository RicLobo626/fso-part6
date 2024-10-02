import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Anecdotes from "./components/Anecdotes";

const App = () => {
  return (
    <>
      <h3>Anecdote app</h3>

      <Notification />

      <AnecdoteForm />

      <Anecdotes />
    </>
  );
};

export default App;
