import { Cart } from "../../../models/cart";
import { HttpResponse } from "../../protocols";

export interface GetCartsController{
    handle(): Promise<HttpResponse<Cart[] | string>>;

}

export interface GetCartsRepository {
    getCarts(): Promise<Cart[] | null>;
}