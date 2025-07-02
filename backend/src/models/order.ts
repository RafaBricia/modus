import { Types } from 'mongoose';

export interface Order {
    id: string;
    cliente: Types.ObjectId;
    produtos: Types.ObjectId[];
    valorTotal: number;
    dataPedido: Date;
}