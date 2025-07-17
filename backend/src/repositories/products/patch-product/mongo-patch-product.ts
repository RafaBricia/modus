import { PatchProductParams, PatchProductRepository, MongoClient, Product, ObjectId } from "../../../controllers/protocols";

export class MongoPatchProductRepository implements PatchProductRepository{

    async patchProduct(id: string ,params:PatchProductParams): Promise<Product>{

        await MongoClient.db
        .collection("Product")
        .updateOne({_id: new ObjectId(id)}, {
                $set:{
                    ...params
                }
            
        })

        const product = await MongoClient.db
        .collection<Omit<Product, "id">>("Product").
        findOne({_id: new ObjectId(id)})


        if(!product){
            throw new Error("Error not Product")
        }

        const {_id, ...rest} = product

        return {id: product?._id.toHexString(), ...rest}
    }

}