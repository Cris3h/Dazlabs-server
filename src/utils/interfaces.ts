export interface NewProduct {
    title?: string;
    category?: string;
    price?: number;
    image?: string;
};

export interface CustomError extends Error {
    statusCode?: number;
};