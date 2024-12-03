import { plainToInstance } from "class-transformer";
import { useCallback } from "react";

import { ProductModel } from "../../models";
import { ProductService } from "../../services/product.service"
import { IPaginationResponse } from "../../types";
import { useQuery } from "../react-query"


const productService = new ProductService();

export const useProducts = (queryParams: any) => {
    return useQuery({
        queryKey: ['products', queryParams],
        queryFn: async () => {
            return await productService.getProducts(queryParams)
        },
        select: useCallback((response: IPaginationResponse<ProductModel[]>) => {
            const { data, metadata } = response;

            const transformData = plainToInstance(ProductModel, data);

            return {
                products: transformData,
                metadata,
            };
        }, []),
        staleTime: 0
    })
}