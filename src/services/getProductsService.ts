import { database } from "../database";
import axios from "axios";

export const getProductsService = async (type: string | undefined) => {
//   console.log("type", type);

  let products;
  try {
    if (!type) {
      // if not argument is passed, we get all products from the database
      products = await database.find();
    } else {
        // if argument is passed, we get all products from the database and fill the database with the new ones
      const fetch = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${type}#json`
      );
      const fillDataBase = fetch.data.results.map(async (e: any) => {
        await database.findOneAndUpdate(
          { title: e.title },
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
      // this way we can get all products from the database and not just the ones which 
      // match the type
      products = await database.find();
    }

    return products;

  } catch (error: any) {

    throw new Error(error.message);

  }
};
