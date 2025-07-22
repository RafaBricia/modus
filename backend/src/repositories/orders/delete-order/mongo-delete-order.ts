import { DeleteOrderParams, DeleteOrderRepository, MongoClient, ObjectId, Order } from "../../../controllers/protocols";

export class MongoDeleteOrderRepository implements DeleteOrderRepository{
    async deleteOrder(id: string): Promise<Order> {
        const order = await MongoClient.db.collection<Omit<Order, "id">>("Order")
        .findOne({_id: new ObjectId(id)})

        if(!order){
            throw new Error("Order not deleted")
        }

        const {deletedCount} = await MongoClient.db.collection("Order")
        .deleteOne({_id: new ObjectId(id)})

        if( deletedCount){
            throw new Error("Order not deleted")
        }

        const {_id, ...rest} = order

        return {id:order?._id.toHexString(), ...rest}
    }
}