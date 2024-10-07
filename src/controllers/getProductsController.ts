import { Request, Response } from "express";
import { getProductsService } from "../services/getProductsService";

export const getProductsController = async (_req: Request, res: Response) => {
  const { type } = _req.query;
  const page = Number(_req.query.page) || 1;
  const limit = Number(_req.query.limit) || 10;
  try {
    const { products, totalProducts, totalPages, currentPage, hasPrev, hasNext } = await getProductsService(
      (type as string) || undefined,
      page,
      limit
    );
    res.status(200).json({
      products,
      totalProducts,
      totalPages,
      currentPage,
      hasPrev,
      hasNext,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
