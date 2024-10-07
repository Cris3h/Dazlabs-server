import { Request, Response } from 'express';
import { deleteProductService } from '../services/deleteProductService';

export const deleteProductController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProduct = await deleteProductService(id);
        res.status(200).json(deletedProduct);
    } catch (error: any) {
        throw new Error(error.message);
    }
};
