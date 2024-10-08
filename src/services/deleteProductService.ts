import { database } from "../database";

export const deleteProductService = async (id: string) => {
  try {
    if (!id) throw new Error("Missing ID parameter");
    await database.findOneAndDelete({ _id: id });
    return { message: "Product deleted successfully" };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
