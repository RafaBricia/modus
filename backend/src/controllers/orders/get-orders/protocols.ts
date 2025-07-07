import { HttpResponse } from "../../protocols";
import { Order } from "../../../models/order";

export interface GetOrdersRespository {
    getOrders(): Promise<Order[]>
}

export interface GetOrdersController {
    handle(): Promise<HttpResponse<Order[]>>
}