import { Types } from 'mongoose';

export interface Payment {
  id: string;
  metodo: "Cartão" | "Pix" | "Boleto";
  valor: number;
  carrinho: Types.ObjectId ;
  status: "Efetuado" | "Não Efetuado";
}
