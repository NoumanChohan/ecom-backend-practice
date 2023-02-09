import express from "express";
import registerRouter from "./Register/RegisterRoutes.js";
import DbConnection from "./DbConnection/DbConnection.js";
import loginRouter from "./Login/LoginRoutes.js";
import productRouter from "./Product/ProductRoutes.js";
import cartProductsRoutes from "./CartProducts/CartProductsRoutes.js";

const app = express();
app.use(express.json());
DbConnection;
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", productRouter);
app.use("/", cartProductsRoutes);
app.listen(5000, () => console.log("listning on port 5000"));
