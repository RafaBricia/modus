import { Types } from 'mongoose';

export interface Carrinho{
    valor: Number
    quantidade: Number
    produto: Types.ObjectId
}