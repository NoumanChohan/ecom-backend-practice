import express from "express";
import registerRouter from "./Register/RegisterRoutes.js";
import DbConnection from "./DbConnection/DbConnection.js";
import loginRouter from "./Login/LoginRoutes.js";
import productRouter from "./Product/ProductRoutes.js";
import cartProductsRoutes from "./CartProducts/CartProductsRoutes.js";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
DbConnection;
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", productRouter);
app.use("/", cartProductsRoutes);
const port = process.env.PORT || 7000;
app.listen(port, () => console.log("listning on port ", port));
