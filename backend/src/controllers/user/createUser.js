import User from "../../model/user.js";
import httpError from "../../util/functions/httpError.js";

const createUser = async (req, res) => {
  try {
    const { name, address, age, department, designation } = req.body;

    const existingUser = await User.findOne({ address: address });
    if (existingUser) {
      throw httpError("User already Exist");
    }

    const createdUser = new User({
      name,
      address,
      age,
      department,
      designation,
    });

    await createdUser.save();

    res.status(201).send({
      message: "User successfully created",
    });
  } catch (err) {
    if (err.error) {
      return res.status(422).send(err);
    }
    res.status(422).send(httpError("Failed to create User"));
  }
};

export default createUser;
