import { HttpRequest, Payment, Types } from "../../protocols";

export interface PatchPaymentParams {
    id?: string;
    metodo?: "Cartão" | "Pix" | "Boleto";
    valor?: number;
    carrinho?: Types.ObjectId ;
    status?: "Efetuado" | "Não Efetuado";
}

export interface PatchPaymentController {
    
}

export interface PatchPaymentRepository {
   patchPayment(id: string, params: PatchPaymentParams): Promise<Payment> 
}