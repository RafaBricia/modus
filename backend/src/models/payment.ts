import { Types } from 'mongoose';

export interface Payment {
  metodo: "Cartão" | "Pix" | "Boleto";
  valor: number;
  carrinho: Types.ObjectId ;
  status: "Efetuado" | "Não Efetuado";
}
