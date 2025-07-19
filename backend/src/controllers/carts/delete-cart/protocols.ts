import { HttpRequest, HttpResponse, Cart } from "../../protocols";

export interface DeleteCartRepository{
    deleteCart(params:DeleteCartParams):Promise<Cart>
}

export interface DeleteCartController{
    handle(httpRequest: HttpRequest<DeleteCartParams>): Promise<HttpResponse<Cart>>
}

export interface DeleteCartParams{
    id:string
}