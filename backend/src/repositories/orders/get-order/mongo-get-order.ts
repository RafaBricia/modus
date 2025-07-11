import { GetOrderRepository, MongoClient, Order, ObjectId } from "../../../controllers/protocols";

export class MongoGetOrderRepository implements GetOrderRepository{
    async getOrder(id:string): Promise<Order | null>{
        const order = await MongoClient.db
        .collection<Omit<Order, "id">>("Pedido")
        .findOne({_id: new ObjectId(id) });
        return order ? { id: order._id.toHexString(), ...order}: null;
    }
}
    