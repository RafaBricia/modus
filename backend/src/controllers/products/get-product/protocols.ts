import { HttpResponse, Product } from "../../protocols";

export interface GetProductController{
    handle(id:string): Promise<HttpResponse<Product| string>>
}

export interface GetProductRepository {
    getProduct(id:string): Promise<Product | null>
}