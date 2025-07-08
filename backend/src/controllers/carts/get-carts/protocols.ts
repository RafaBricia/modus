import { Cart } from "../../../models/cart";
import { HttpResponse } from "../../protocols";

export interface GetCartsController{
    handle(): Promise<HttpResponse<Cart[]>>

}

export interface GetCartsRepository {
    getCarts(): Promise<Cart[] >;
}