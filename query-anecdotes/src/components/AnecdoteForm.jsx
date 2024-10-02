import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../services/anecdotesService";
import { useRef } from "react";
import { useNotification } from "../context/NotificationContext";

const AnecdoteForm = () => {
  const formRef = useRef();
  const queryClient = useQueryClient();
  const { showSuccess, showError } = useNotification();

  const handleSuccess = () => {
    showSuccess("Anecdote created successfully");
    queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    formRef.current.reset();
  };

  const handleError = (e) => {
    const errorPayload = e.response.data;
    showError(errorPayload.error);
  };

  const createMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: handleSuccess,
    onError: handleError,
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
