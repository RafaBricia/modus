import { Types } from 'mongoose';

export interface Pagamento {
  metodo: "Cartão" | "Pix" | "Boleto";
  valor: number;
  carrinho: Types.ObjectId ;
  status: "Efetuado" | "Não Efetuado";
}
