import Joi from "joi";
import mongoose from "mongoose";

const cartProductSchema = mongoose.Schema({
  productName: String,
  productPrice: Number,
  productImage: String,
  productQuantity: Number,
  productSubTotal: Number,
});
const Cart = mongoose.model("Cart", cartProductSchema);
export const createCartSchema = (props) => {
  const cartSchemaWithJoy = Joi.object({
    productName: Joi.string().required(),
    productPrice: Joi.number().required(),
    productImage: Joi.string().required(),
    productQuantity: Joi.number().required(),
    productSubTotal: Joi.number().required(),
  });
  return cartSchemaWithJoy.validate(props);
};
export default Cart;
