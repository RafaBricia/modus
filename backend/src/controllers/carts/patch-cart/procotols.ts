import { HttpRequest, Cart, Types, HttpResponse } from "../../protocols";

export interface PatchCartParams {
    id?: string
    valor?: number
    quantidade?: number
    produto?: Types.ObjectId
}

export interface PatchCartController {
    handle(httpRequest:HttpRequest<any>): Promise<HttpResponse<Cart>>
}

export interface PatchCartRepository {
    patchCart(id: string, params:PatchCartParams): Promise<Cart>
}