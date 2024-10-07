import { MONGO_URI } from "./utils/envs";
import mongoose from "mongoose";
import { productsSchema } from "./schemas/productSchema";

console.log('db', MONGO_URI);
const conn = mongoose.createConnection(MONGO_URI);

export const database = conn.model('Product', productsSchema);