import { Schema } from "mongoose";

export const productsSchema = new Schema({
  title: String,
  category: String, //req.query
  price: Number,
  image: String,
});
