import express from "express";
import { putProductService } from "../services/putProductService";

export const putProductController = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const { title, category, price, image } = req.body;
    const object = { title, category, price, image };

    if(!id) res.status(400).json({message: 'Missing ID parameter'});

    try {
        const changedProduct = await putProductService(id, object); 

        res.status(200).json(changedProduct);

    } catch (error: any) {
        res.status(400).send(error.message);
    }
};