import express from "express";
import Cart, { createCartSchema } from "./CartProductsSchema.js";
const cartProductsRoutes = express.Router();
console.log("1");
cartProductsRoutes.post("/api/cartproduct", async (req, res) => {
  const { value, error } = createCartSchema(req.body);
  if (error) res.status().send(error.details[0].message);
  const cart = new Cart(req.body);
  try {
    const result = await cart.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//
//
//
cartProductsRoutes.get("/api/cartproduct", async (req, res) => {
  try {
    const result = await Cart.find();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//
//
//
cartProductsRoutes.put("/api/cartproduct/:id", async (req, res) => {
  try {
    const result = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//
//
//
cartProductsRoutes.delete("/api/cartproduct/:id", async (req, res) => {
  try {
    const result = await Cart.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default cartProductsRoutes;
