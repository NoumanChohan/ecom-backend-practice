import express from "express";
import * as dotenv from "dotenv";
import registerRouter from "./Register/RegisterRoutes.js";
import DbConnection from "./DbConnection/DbConnection.js";
import loginRouter from "./Login/LoginRoutes.js";
import productRouter from "./Product/ProductRoutes.js";
import cartProductsRoutes from "./CartProducts/CartProductsRoutes.js";
import cors from "cors";
import { foo } from "./Prod.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
DbConnection;

// app.get("/api/cartcart", async (req, res) => {
//   res.send("hellooo");
// });
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", productRouter);
app.use("/", cartProductsRoutes);
app.use("./Prod.js", foo);
const port = process.env.PORT || 7000;
app.listen(port, () => console.log("listning on port ", port));
