import { environment } from "../constants/environment";
import { ProductModel } from "../models";
import { IPaginationResponse } from "../types";

import { ApiBase } from "./base.service";



export class ProductService extends ApiBase {
    constructor(){
        super({baseUrl: environment.apiUrl, url: 'products' })
    }

    async getProducts(args: any): Promise<IPaginationResponse<ProductModel[]>> {
        return await this.get<ProductModel[]>('', {params: args}).then((response) => response.data);
    }
}