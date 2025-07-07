import { HttpResponse } from "../../protocols";
import { Order } from "../../../models/order";

export interface GetOrderRepository{
    getOrder(id: string): Promise<Order | null>
}

export interface GetOrderController {
    handle(id:string): Promise<HttpResponse<Order | string>>
}
