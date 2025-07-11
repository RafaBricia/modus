import { GetProductsRepository, Product, MongoClient } from "../../../controllers/protocols";

export class MongoGetProductsRepository implements GetProductsRepository{

    async getProducts(): Promise<Product[]> {
        
        const products = await MongoClient.db.collection<Omit<Product, "id">>("Produtos")
        .find({})
        .toArray();

        return products.map(({_id, ...rest}) => ({...rest, id: _id.toHexString()}));
    }
}
