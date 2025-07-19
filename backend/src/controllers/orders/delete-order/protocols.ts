import { HttpRequest, HttpResponse, Order } from "../../protocols";

export interface DeleteOrderRepository{
    deleteOrder(params:DeleteOrderParams):Promise<Order>
}

export interface DeleteOrderController{
    handle(httpRequest: HttpRequest<DeleteOrderParams>): Promise<HttpResponse<Order>>
}

export interface DeleteOrderParams{
    id:string
}