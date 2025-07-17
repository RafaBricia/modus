import { PatchCategoryRepository, Category, PatchCategoryParams, ObjectId, MongoClient } from '../../../controllers/protocols'

export class MongoPatchCategoryRepository implements PatchCategoryRepository{

    async patchCategory(id: string, params: PatchCategoryParams): Promise<Category> {
        
        await MongoClient.db.collection("Category")
        .updateMany({id: new ObjectId(id)},{
            $set:{
                ...params
            }
        })

        const Category = await MongoClient.db.collection<Omit<Category, "id">>("Category").findOne({_id: new ObjectId(id)})

        if(!Category){
            throw new Error("Error not Category")
        }

        const {_id, ...rest} = Category

        return {id: Category._id.toHexString(), ...rest}

    }


}
