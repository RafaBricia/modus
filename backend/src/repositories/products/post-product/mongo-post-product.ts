import { PostProductParams, PostProductRepository, Product, MongoClient } from "../../../controllers/protocols";

export class MongoPostPaymentRepository implements PostProductRepository{

    async postProduct(params: PostProductParams): Promise<Product> {
        
        const insertID = await  MongoClient.db
        .collection("Product")
        .insertOne({params})

        const Product = await MongoClient.db
        .collection<Omit<Product, "id">>("Product")
        .findOne({id:insertID})

        if(!Product){
            throw new Error("Order not inserted")

        }

        const {_id, ...rest} = Product

        return {id:Product?._id.toHexString(), ...rest}  as unknown as Product

    }

}