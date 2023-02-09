import express from "express";
import Registration from "../Register/RegisterSchema.js";
const loginRouter = express.Router();
loginRouter.post("/api/login", async (req, res) => {
  const userData = await Registration.find({ email: req.body.email });
  console.log("userdata", userData);
  if (!userData) res.status(400).send("user does not exist");
  console.log("Data", req.body.password !== userData[0].password);
  if (req.body.password !== userData[0].password) {
    res.status(400).send("Incorrect Password hyhyh");
  }
  res.send(userData[0]);
});
export default loginRouter;
