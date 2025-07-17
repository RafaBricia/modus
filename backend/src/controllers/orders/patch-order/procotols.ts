import { HttpRequest, HttpResponse, Order, Types } from "../../protocols";

export interface PatchOrderParams {
    id?: string;
    cliente?: Types.ObjectId;
    produtos?: Types.ObjectId[];
    valorTotal?: number;
    dataPedido?: Date;
}

export interface PatchOrderController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Order>>
}

export interface PatchOrderRepository {
    patchOrder(id: string, params: PatchOrderParams): Promise<Order>
}