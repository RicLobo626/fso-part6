import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../services/anecdotesService";
import { useRef } from "react";

const AnecdoteForm = () => {
  const formRef = useRef();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
      formRef.current.reset();
    },
  });

  const handleCreate = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    createMutation.mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={handleCreate} ref={formRef}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
