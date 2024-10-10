import express from "express";
import { postNewProductService } from "../services/postNewProductService";

export const postNewProductController = async (_req: express.Request, res: express.Response) => {
    const { title, category, price, image } = _req.body;
    if(!title || !category || !price || !image) res.status(400).json({ message: 'Missing parameter' });
    try {
    const newProduct = await postNewProductService({ title, category, price, image });
    res.status(200).json(newProduct);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};