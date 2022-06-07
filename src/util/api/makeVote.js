import apiUrl from "./apiUrl";

const makeVote = async (address, candidateNo) => {
  try {
    const res = await fetch(apiUrl + "/users/vote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        address,
        candidateNo,
      }),
    });

    const data = await res.json();

    if (data.error) {
      throw data;
    }

    return data;
  } catch (err) {
    if (err.error) {
      throw err.error;
    }
    throw "Couldn't Make Vote";
  }
};

export default makeVote;
