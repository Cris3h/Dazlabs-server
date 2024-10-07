import { database } from "../database";

export const deleteProductService = async (id : string) => {
    try {
        const deletedProduct = await database.findOneAndDelete({_id: id});
        return deletedProduct;
    } catch (error: any) {
        throw new Error(error.message);
    }
};