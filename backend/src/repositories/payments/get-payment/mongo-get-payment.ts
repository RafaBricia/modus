import { MongoClient } from "../../../database/mongo";
import { GetPaymentRepository } from "../../../controllers/payments/get-payment/protocols";
import { Payment } from "../../../models/payment";
import { ObjectId } from "mongodb";

export class MongoGetPaymentRepository implements GetPaymentRepository{

    async getPayment(id:string): Promise<Payment | null>{

        const payment = await MongoClient.db.collection<Omit<Payment, "id">>("Pagamento")
        .findOne({_id: new ObjectId(id)})

        return payment ? {id: payment._id.toHexString(), ...payment} : null
    }
}