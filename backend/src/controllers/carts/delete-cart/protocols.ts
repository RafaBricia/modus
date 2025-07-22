import { HttpRequest, HttpResponse, Cart } from "../../protocols";

export interface DeleteCartRepository{
    deleteCart(id:string):Promise<Cart>
}

export interface DeleteCartController{
    handle(httpRequest: HttpRequest<DeleteCartParams>): Promise<HttpResponse<Cart>>
}

export interface DeleteCartParams{
    id:string
}