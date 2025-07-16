import { HttpRequest, HttpResponse, Order, Types } from "../../protocols";

export interface PostOrderParams{
id: string;
    cliente: Types.ObjectId;
    produtos: Types.ObjectId[];
    valorTotal: number;
    dataPedido: Date;
}

export interface PostOrderController{
    handle(httpRequest: HttpRequest<PostOrderParams>): Promise<HttpResponse<Order>>
}

export interface PostOrderRepository{
    postOrder(params: PostOrderParams): Promise<Order>;
}