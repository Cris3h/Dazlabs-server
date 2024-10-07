import { database } from "../database";
import axios from "axios";

export const getProductsService = async (
  type: string | undefined,
  page: number,
  limit: number
) => {
  let products;
  let totalProducts;

  try {
    if (!type) {
      // no payload:
      totalProducts = await database.countDocuments();
      products = await database
        .find()
        .skip((page - 1) * limit)
        .limit(limit);
    } else {
      const fetch = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${type}#json`
      );
      const fillDataBase = fetch.data.results.map(async (e: any) => {
        // check and update
        await database.findOneAndUpdate(
          //this "filters" the database to not get more than one document with the same title. Like we'd say in my neighborhood "a fines practicos". Just for demo.
          { title: e.title },
          // {_id: e.id},
          {
            title: e.title,
            category: type,
            price: e.price,
            image: e.thumbnail,
          },
          // insert new document if not found
          { upsert: true, new: true }
        );
      });

      await Promise.all(fillDataBase);
      totalProducts = await database.countDocuments();
      products = await database
        .find()
        .skip((page - 1) * limit)
        .limit(limit);
    }

    return {
      products,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: page,
      hasPrev: page > 1,
      hasNext: page < Math.ceil(totalProducts / limit),
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
