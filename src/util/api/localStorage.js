export const getVoters = () => {
  const data = JSON.parse(localStorage.getItem("voters"));
  return data;
};

export const setVoters = (voter) => {
  const data = getVoters();
  data.push(voter);
  localStorage.setItem("voters", JSON.stringify(data));
};
