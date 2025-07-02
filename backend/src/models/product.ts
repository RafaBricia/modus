import { Types } from 'mongoose';

export interface Product {
    id: string; 
    categoria: Types.ObjectId;
    nome: string;
    tamanho: "P" | "M" | "G" | "GG" | "XG";
    valor: number;
    descricao: string;
    quantidade: number;
    image: string;
}
