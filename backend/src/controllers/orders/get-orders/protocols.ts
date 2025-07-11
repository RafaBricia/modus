import { HttpResponse, Order } from "../../protocols";

export interface GetOrdersRespository {
    getOrders(): Promise<Order[]>
}

export interface GetOrdersController {
    handle(): Promise<HttpResponse<Order[]>>
}