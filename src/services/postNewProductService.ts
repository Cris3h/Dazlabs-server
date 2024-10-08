import { database } from "../database";
import { NewProduct } from "../utils/interfaces";


export const postNewProductService = async (object: NewProduct) => {
    const { title, category, price, image } = object;
    try{
        const newProduct = new database({
            title,
            category,
            price,
            image,
        });
        await newProduct.save();
        return newProduct;
    }catch(error: any){
        throw new Error(error.message);
    }
};