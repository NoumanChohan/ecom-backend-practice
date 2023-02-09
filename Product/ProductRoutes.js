import express from "express";
import Product, { createProductWithJoi } from "./ProductSchema.js";
import { error } from "console";
const productRouter = express.Router();

productRouter.post("/api/product", async (req, res) => {
  const { error, value } = createProductWithJoi(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const product = new Product(req.body);
  try {
    const result = await product.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//
//
productRouter.get("/api/product", async (req, res) => {
  try {
    const result = await Product.find();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//
//
productRouter.delete("/api/product/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

///
//
//

productRouter.put("/api/product/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default productRouter;
