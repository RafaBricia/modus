import { HttpRequest, HttpResponse, Product } from "../../protocols";

export interface DeleteProductRepository{
    deleteProduct(params:DeleteProductParams):Promise<Product>
}

export interface DeleteProductController{
    handle(httpRequest: HttpRequest<DeleteProductParams>): Promise<HttpResponse<Product>>
}

export interface DeleteProductParams{
    id:string
}