import { PostPaymentsParams, PostPaymentsRepository, Payment, MongoClient } from "../../../controllers/protocols";

export class MongoPostPaymentRepository implements PostPaymentsRepository{

    async postPayments(params: PostPaymentsParams): Promise<Payment> {
        
        const insertID = await  MongoClient.db
        .collection("Payment")
        .insertOne({params})

        const payment = await MongoClient.db
        .collection<Omit<Payment, "id">>("Payment")
        .findOne({id:insertID})

        if(!payment){
            throw new Error("Order not inserted")

        }

        const {_id, ...rest} = payment

        return {id:payment?._id.toHexString(), ...rest}  as unknown as Payment

    }

}