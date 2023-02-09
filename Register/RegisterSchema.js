import mongoose from "mongoose";
import Joi from "joi";
const RegisterSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});
const Registration = mongoose.model("Register", RegisterSchema);

export const createUserWithJoiSchema = (props) => {
  const joiSchema = Joi.object({
    name: Joi.string().required().min(3).max(25),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
    //   .options({ language: { any: { allowOnly: "must match password" } } }),
  });
  return joiSchema.validate(props);
};

export default Registration;
