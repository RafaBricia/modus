import { PostCategoryRepository, PostCategoryParams, Category, MongoClient } from "../../../controllers/protocols";

export class MongoPostCategoryRepository implements PostCategoryRepository {

    async postCategory(params:PostCategoryParams): Promise<Category>{

        const insertID = await MongoClient.db
        .collection("Category")
        .insertOne({params})

        const category = await MongoClient.db
        .collection<Omit<"Category", "id">>("Category")
        .findOne({_id:insertID})

         if(!category){
            throw new Error("Cart not inserted")
        }
    
        const {_id, ...rest} = category

        return { id: category._id.toHexString(), ...rest } as unknown as Category


    }

}