import { database } from "../database";


export const getProductsService = async () => {
    try {
        const products = await database.find();
        return products
    } catch (error: any) {
        throw new Error(error.message)
    }
};