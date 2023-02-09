import mongoose from "mongoose";
const DbConnection = mongoose
  .connect("mongodb://localhost:27017/Ecommerce-database")
  .then(() => console.log("DB has been connected"))
  .catch((error) => console.log("DB not connected yet", error));
export default DbConnection;
