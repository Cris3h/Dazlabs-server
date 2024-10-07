import { Request, Response } from "express";
import { getProductsService } from "../services/getProductsService";

export const getProductsController = async(_req: Request, res: Response)=>{
    try {
        const allProducts = await getProductsService();
        res.json(allProducts)
    } catch (error: any) {
        throw new Error(error.message)        
    }
};