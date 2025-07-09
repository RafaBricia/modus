import { GetProductsRepository } from "../../../controllers/products/get-products/protocols";
import { MongoClient } from "../../../database/mongo";
import { Product } from "../../../models/product";

export class MongoGetProductsRepository implements GetProductsRepository{

    async getProducts(): Promise<Product[]> {
        
        const products = await MongoClient.db.collection<Omit<Product, "id">>("Produtos")
        .find({})
        .toArray();

        return products.map(({_id, ...rest}) => ({...rest, id: _id.toHexString()}));
    }
}
