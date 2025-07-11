import { HttpResponse, Product } from "../../protocols";

export interface GetProductsController {
    handle(): Promise<HttpResponse<Product[] | string>>
}

export interface GetProductsRepository{
    getProducts(): Promise<Product[] | null>
}