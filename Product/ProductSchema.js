import Joi from "joi";
import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
  productName: String,
  productPrice: Number,
  productImage: String,
});
const Product = mongoose.model("Product", ProductSchema);
export const createProductWithJoi = (props) => {
  const productJoiSchema = Joi.object({
    productName: Joi.string().required(),
    productPrice: Joi.number().required(),
    productImage: Joi.string().required(),
  });
  return productJoiSchema.validate(props);
};
export default Product;
