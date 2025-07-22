import { DeletePaymentParams, DeletePaymentRepository, MongoClient, ObjectId, Payment } from "../../../controllers/protocols";

export class MongoDeletePaymentRepository implements DeletePaymentRepository{
    async deletePayment(id: string): Promise<Payment> {
        const payment = await MongoClient.db.collection<Omit<Payment, "id">>("Payment")
        .findOne({_id: new ObjectId(id)})

        if(!payment){
            throw new Error("Payment not deleted")
        }

        const {deletedCount} = await MongoClient.db.collection("Payment")
        .deleteOne({_id:new ObjectId(id)})

        if(deletedCount === 0){
            throw new Error("Payment not deleted")
        }

        const {_id, ...rest} = payment

        return {id: payment?._id.toHexString(), ...rest}
    }
}
