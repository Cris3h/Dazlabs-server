import { database } from "../database";
import { NewProduct } from "../utils/interfaces";

export const putProductService = async (id: string, object: NewProduct) => {
  const { title, category, price, image } = object;
  try {
    const changedProduct = await database.findOneAndUpdate(
      { _id: id },
      {
        title,
        category,
        price,
        image,
      },
      {
        new: true,
      }
    );
    await changedProduct?.save();
    return changedProduct;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
