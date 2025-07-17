import { HttpRequest, Order, Types } from "../../protocols";

export interface PatchOrderParams {
    id?: string;
    cliente?: Types.ObjectId;
    produtos?: Types.ObjectId[];
    valorTotal?: number;
    dataPedido?: Date;
}

export interface PatchOrderController {
    
}

export interface PatchOrderRepository {
    patchOrder(id: string, params: PatchOrderParams): Promise<Order>
}