import { HttpResponse } from "../../protocols";
import { Product } from "../../../models/product";

export interface GetProductsController {
    handle(): Promise<HttpResponse<Product[] | string>>
}

export interface GetProductsRepository{
    getProducts(): Promise<Product[] | null>
}