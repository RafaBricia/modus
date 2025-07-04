import { HttpResponse } from "../../protocols";
import { Cart } from "../../../models/cart";

export interface GetCartController {

    handle(id: string): Promise<HttpResponse<Cart | string>>;

}

export interface GetCartRespository {

    getCart(id: string):  Promise<Cart | null>

}