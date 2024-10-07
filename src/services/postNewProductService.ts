import { database } from "../database";

export const postNewProductService = async (object: object) => {
    const { title, category, price, image } = object;
    try{
        const newProduct = new database({
            title,
            category,
            price,
            image,
        });
        console.log('this is new product',newProduct);
        await newProduct.save();
        return newProduct;
    }catch(error){
        throw new Error(error.message);
    }
};

