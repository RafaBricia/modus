import { PatchAdministratorRepository, Administrator, PatchAdministratorParams, ObjectId, MongoClient } from '../../../controllers/protocols'

export class MongoPatchAdministratorRepository implements PatchAdministratorRepository{

    async patchAdministrator(id: string, params: PatchAdministratorParams): Promise<Administrator> {
        
        await MongoClient.db.collection("Administrator")
        .updateMany({id: new ObjectId(id)},{
            $set:{
                ...params
            }
        })

        const Administrator = await MongoClient.db.collection<Omit<Administrator, "id">>("Administrator").findOne({_id: new ObjectId(id)})

        if(!Administrator){
            throw new Error("Error not Administrator")
        }

        const {_id, ...rest} = Administrator

        return {id: Administrator._id.toHexString(), ...rest}

    }


}
