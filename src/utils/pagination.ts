//For future use

import { Document, Model } from "mongoose";
                         //T variable type of document: could be any type but just Document type.
export const pagination = async <T extends Document>(schema: Model<T>, page: number, limit: number) => {

    const skip = (page - 1) * limit;


    const results = await schema.find().skip(skip).limit(limit);
    const total = await schema.countDocuments();


    const pages = Math.ceil(total / limit);

    const hasPrev = page > 1;
    const hasNext = page < pages;

    const pagination = {
        data: results,
        totalItems: total,
        currentPage: page,
        totalPages: pages,
        hasPrev,
        hasNext,
    };

    return pagination;
};