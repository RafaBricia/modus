import { HttpRequest, HttpResponse, Payment, Types } from "../../protocols";

export interface PostPaymentsParams{
  id: string;
  metodo: "Cartão" | "Pix" | "Boleto";
  valor: number;
  carrinho: Types.ObjectId ;
  status: "Efetuado" | "Não Efetuado";
}

export interface PostPaymentsController{
    handle(httpRequest: HttpRequest<PostPaymentsParams>): Promise<HttpResponse<Payment>>
}

export interface PostPaymentsRepository{
    postPayments(params:PostPaymentsParams): Promise<Payment>
}