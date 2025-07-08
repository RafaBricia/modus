import { Types } from 'mongoose';

export interface Cart{
    id: string
    valor: Number
    quantidade: Number
    produto: Types.ObjectId
}