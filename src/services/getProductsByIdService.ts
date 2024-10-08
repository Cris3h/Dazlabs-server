import { database } from "../database";

export const getProductsByIdService = async (id: string) => {
    try {
        if(!id) throw new Error('Missing ID parameter');
        const productId = await database.findOne({_id: id});
        return productId;
    } catch (error: any) {
        throw new Error(error.message);
    }
};