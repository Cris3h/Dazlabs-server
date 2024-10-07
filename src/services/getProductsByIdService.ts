import { database } from "../database";

export const getProductsByIdService = async (id: string) => {
    try {
        const productId = await database.findOne({_id: id});
        return productId;
    } catch (error: any) {
        throw new Error(error.message);
    }
};