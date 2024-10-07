import { database } from "../database";

interface NewProduct {
    title: string;
    category: string;
    price: number;
    image: string;
}

export const postNewProductService = async (object: NewProduct) => {
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
    }catch(error: any){
        throw new Error(error.message);
    }
};