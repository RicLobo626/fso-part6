import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, updateAnecdote } from "../services/anecdotesService";
import { useNotification } from "../context/NotificationContext";

const Anecdotes = () => {
  const queryClient = useQueryClient();
  const { showSuccess } = useNotification();

  const {
    data: anecdotes,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: false,
  });

  const handleVoteSuccess = (anecdote) => {
    showSuccess(`You voted for '${anecdote.content}'`);

    const updatedAnecdotes = anecdotes.map((a) => {
      return a.id === anecdote.id ? anecdote : a;
    });

    queryClient.setQueryData(["anecdotes"], updatedAnecdotes);
  };

  const voteMutation = useMutation({
    mutationFn: ([id, body]) => updateAnecdote(id, body),
    onSuccess: handleVoteSuccess,
  });

  const handleVote = (anecdote) => () => {
    voteMutation.mutate([anecdote.id, { ...anecdote, votes: anecdote.votes + 1 }]);
  };

  if (isPending) {
    return <div>Loading anecdotes...</div>;
  }

  if (isError) {
    return <div>Anecdote service not available due to problems in server</div>;
  }
  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote(anecdote)}>vote</button>
      </div>
    </div>
  ));
};

export default Anecdotes;
