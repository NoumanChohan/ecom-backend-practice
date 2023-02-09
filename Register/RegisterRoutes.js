import express from "express";
import Registration, { createUserWithJoiSchema } from "./RegisterSchema.js";
const registerRouter = express.Router();

registerRouter.post("/api/register", async (req, res) => {
  console.log(req.body);
  const { error, value } = createUserWithJoiSchema(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const registration = new Registration(req.body);

  try {
    const result = await registration.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

registerRouter.get("/api/register", async (req, res) => {
  try {
    const result = await Registration.find();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
registerRouter.delete("/api/register/:id", async (req, res) => {
  try {
    const result = await Registration.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
registerRouter.put("/api/register/:id", async (req, res) => {
  const { error, value } = createUserWithJoiSchema(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const result = await Registration.findByIdAndUpdate(req.params.id, value, {
    new: true,
  });

  if (!result) res.status(400).send("ni manta");
  res.send(result);
});
export default registerRouter;
