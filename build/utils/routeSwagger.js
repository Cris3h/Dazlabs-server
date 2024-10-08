"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchProductSwagger = exports.deleteProductSwagger = exports.createProductSwagger = exports.getProductByIdSwagger = exports.getAllProductsSwagger = void 0;
exports.getAllProductsSwagger = {
    "/products": {
        get: {
            tags: ["Store"],
            summary: "Returns all products",
            parameters: [
                {
                    name: "page",
                    in: "query",
                    required: true,
                    description: "Page number for pagination",
                    schema: {
                        type: "integer",
                    },
                },
                {
                    name: "limit",
                    in: "query",
                    required: true,
                    description: "Number of products per page",
                    schema: {
                        type: "integer",
                    },
                },
                {
                    name: "type",
                    in: "query",
                    required: false,
                    description: "Type of products to be returned",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Successful response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.getProductByIdSwagger = {
    "/products/{id}": {
        get: {
            tags: ["Store"],
            summary: "Search product by ID",
            parameters: [
                {
                    name: "id",
                    in: "path", // Cambiado de "query" a "path"
                    required: true,
                    description: "ID of the product to retrieve",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Successful response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                            },
                        },
                    },
                },
                404: {
                    description: "Product not found",
                },
            },
        },
    },
};
exports.createProductSwagger = {
    "/products": {
        post: {
            tags: ["Store"],
            summary: "Create a new product",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                title: {
                                    type: "string",
                                    description: "The title of the product",
                                    example: "Nuevo Celular",
                                },
                                category: {
                                    type: "string",
                                    description: "The category of the product (e.g., electronics, clothing)",
                                    example: "Electronics",
                                },
                                price: {
                                    type: "number",
                                    description: "The price of the product",
                                    example: 299.99,
                                },
                                image: {
                                    type: "string",
                                    description: "The URL of the product image",
                                    example: "https://example.com/image.jpg",
                                },
                            },
                            required: ["title", "category", "price", "image"], // Campos obligatorios
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Product created successfully",
                },
                400: {
                    description: "Invalid input, missing fields or invalid types",
                },
            },
        },
    },
};
exports.deleteProductSwagger = {
    "/products/{id}": {
        delete: {
            tags: ["Store"],
            summary: "Delete a product by ID",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    description: "ID of the product to be deleted",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                204: {
                    description: "Product deleted successfully",
                },
                404: {
                    description: "Product not found",
                },
            },
        },
    },
};
exports.patchProductSwagger = {
    "/products/{id}": {
        patch: {
            tags: ["Store"],
            summary: "Update a product by ID",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    description: "ID of the product to be updated",
                    schema: {
                        type: "string",
                    },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                title: {
                                    type: "string",
                                    description: "The title of the product",
                                    example: "Nuevo Celular",
                                },
                                category: {
                                    type: "string",
                                    description: "The category of the product",
                                    example: "Electronics",
                                },
                                price: {
                                    type: "number",
                                    description: "The price of the product",
                                    example: 299.99,
                                },
                                image: {
                                    type: "string",
                                    description: "The URL of the product image",
                                    example: "https://example.com/image.jpg",
                                },
                            },
                            additionalProperties: true, // Permite campos adicionales
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Product updated successfully",
                },
                400: {
                    description: "Invalid input",
                },
                404: {
                    description: "Product not found",
                },
            },
        },
    },
};
