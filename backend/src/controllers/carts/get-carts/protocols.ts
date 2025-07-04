import { Cart } from "../../../models/cart";
import { HttpResponse } from "../../protocols";

export interface GetCartsController{
    handle(): Promise<HttpResponse<Cart[]>>

}

export interface GetCartsRepositories {
    getCarts(): Promise<Cart[] >;
}