import apiUrl from "./apiUrl";

const getUser = async (address) => {
  try {
    const res = await fetch(apiUrl + `/users/${address}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getUser;
