import {  DeleteCategoryRepository, Category, MongoClient, ObjectId } from "../../../controllers/protocols";

export class MongoDeleteCategoryRepository implements DeleteCategoryRepository{
    async deleteCategory(id: string): Promise<Category> {
        
        const category = await MongoClient.db.collection<Omit<Category,"id">>("Category")
        .findOne({_id: new ObjectId(id)})

        if(!category){
            throw new Error("Category not found")

        }

        const {deletedCount} = await MongoClient.db.collection("Category").deleteOne({_id: new ObjectId(id)})

        if(deletedCount === 0){
            throw new Error("Category not deleted")

        }

        const {_id, ...rest} = category

        return {id: category?._id.toHexString(), ...rest}

    }
}