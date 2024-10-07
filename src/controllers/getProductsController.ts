import { Request, Response } from "express";
import { getProductsService } from "../services/getProductsService";

export const getProductsController = async (_req: Request, res: Response) => {
  const { type } = _req.query;
  try {
    const allProducts = await getProductsService(
      (type as string) || undefined
    );
    res.status(200).json(allProducts);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
