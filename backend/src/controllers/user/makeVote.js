import User from "../../model/user.js";
import httpError from "../../util/functions/httpError.js";

const makeVote = async (req, res) => {
  try {
    const { address, candidateNo } = req.body;

    const existingUser = await User.findOne({ address });
    if (!existingUser) {
      throw httpError("User not found");
    }

    if (existingUser.age < 18) {
      throw httpError("User is below 18 yrs of age");
    }

    if (existingUser.department != "ECE") {
      throw httpError("User must belong to ECE Department");
    }

    if (existingUser.designation != "Student") {
      throw httpError("User must be a student");
    }

    res.status(422).send({
      message: "Successfully voted",
    });
  } catch (err) {
    if (err.error) {
      return res.status(422).send(err);
    }
    res.status(422).send(httpError("Couldn't Make a Vote"));
  }
};

export default makeVote;
