import { MongoClient } from "../../../database/mongo";
import { GetOrdersRespository } from "../../../controllers/orders/get-orders/protocols";
import { Order } from "../../../models/order";

export class MongoGetOrdersRepository implements GetOrdersRespository{

    async getOrders(): Promise<Order[]>{

        const orders = await MongoClient.db.collection<Omit<Order, "id">>("Pedidos")
        .find({})
        .toArray();

        return orders.map(({ _id,...rest}) => 
            ({...rest, id: 
                _id.toHexString()
            }))
    }

}
