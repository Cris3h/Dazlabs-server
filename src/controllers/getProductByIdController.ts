import { Request, Response } from "express";
import { getProductsByIdService } from "../services/getProductsByIdService";

export const getProductByIdController = async (
  _req: Request,
  res: Response
) => {
  const { id } = _req.params;

  try {
    const productId = await getProductsByIdService(id);
    res.status(200).json(productId);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
