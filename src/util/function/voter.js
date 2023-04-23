export const getVoters = () => {
  const voters = localStorage.voters;
  return voters;
};

export const addVoter = (newVoter) => {
  const voters = getVoters();
  localStorage.voters = [...voters, newVoter];
};

export const hasVoted = (voter) => {
  const voters = getVoters();
  return voters.includes(voter);
};
