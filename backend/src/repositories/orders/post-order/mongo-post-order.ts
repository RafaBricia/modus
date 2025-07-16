import { PostOrderParams, PostOrderRepository, Order, MongoClient } from "../../../controllers/protocols";

export class MongoPostOrderRepositoy implements PostOrderRepository{

    async postOrder(params: PostOrderParams): Promise<Order>{

        const insertID = await MongoClient.db
        .collection("Order")
        .insertOne({params})

        const order = await MongoClient.db
        .collection<Omit<"Order", "id">>("Order")
        .findOne({_id: insertID})

        if(!order){
            throw new Error("Order not inserted")

        }

        const {_id, ...rest} = order

        return { id: order._id.toHexString(), ...rest } as unknown as Order

    }
}