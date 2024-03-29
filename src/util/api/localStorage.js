export const getVoters = () => {
  const voters = localStorage.voters;
  return JSON.parse(voters);
};

export const addVoter = (newVoter) => {
  const voters = getVoters();
  localStorage.voters = JSON.stringify([...voters, newVoter]);
};

export const hasVoted = (voter) => {
  const voters = getVoters();
  return voters.includes(voter);
};
