import { HttpRequest, HttpResponse, Payment, Types } from "../../protocols";

export interface PatchPaymentParams {
    id?: string;
    metodo?: "Cartão" | "Pix" | "Boleto";
    valor?: number;
    carrinho?: Types.ObjectId ;
    status?: "Efetuado" | "Não Efetuado";
}

export interface PatchPaymentController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Payment>>
}

export interface PatchPaymentRepository {
   patchPayment(id: string, params: PatchPaymentParams): Promise<Payment> 
}