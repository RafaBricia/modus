import { Types } from 'mongoose';

export interface Pedido {
    id: string;
    cliente: Types.ObjectId;
    produtos: Types.ObjectId[];
    valorTotal: number;
    dataPedido: Date;
}