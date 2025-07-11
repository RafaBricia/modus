import { GetCartsRepository, MongoClient, Cart } from "../../../controllers/protocols";

export class MongoGetCartsRepository implements GetCartsRepository {

    async getCarts(): Promise<Cart[]>{

        const carts = await MongoClient.db
            .collection<Omit<Cart, "id">>("Carrinhos")
            .find({})
            .toArray();

        return carts.map(({_id, ...rest}) => ({...rest, id: _id.toHexString()}));
    }

}

