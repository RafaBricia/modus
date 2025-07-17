import { HttpRequest, Cart, Types } from "../../protocols";

export interface PatchCartParams {
    id?: string
    valor?: number
    quantidade?: number
    produto?: Types.ObjectId
}

export interface PatchCartController {
    
}

export interface PatchCartRepository {
    patchCart(id: string, params:PatchCartParams): Promise<Cart>
}