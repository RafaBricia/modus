import { HttpRequest, HttpResponse, Payment } from "../../protocols";

export interface DeletePaymentRepository{
    deletePayment(id:string):Promise<Payment>
}

export interface DeletePaymentController{
    handle(httpRequest: HttpRequest<DeletePaymentParams>): Promise<HttpResponse<Payment>>
}

export interface DeletePaymentParams{
    id:string
}