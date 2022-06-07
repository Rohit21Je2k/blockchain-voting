import User from "../../model/user.js";
import httpError from "../../util/functions/httpError.js";

const getUser = async (req, res) => {
  try {
    const { address } = req.params;

    const user = await User.findOne({ address: address }, ["-_id", "-__v"]);
    if (!user) {
      throw httpError("User does not exist");
    }

    res.status(200).send(user);
  } catch (err) {
    if (err.error) {
      return res.status(422).send(err);
    }
    res.status(422).send(httpError("couldn't get user data"));
  }
};

export default getUser;
