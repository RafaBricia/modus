import { Types } from 'mongoose';

export interface Cart{
    valor: Number
    quantidade: Number
    produto: Types.ObjectId
}