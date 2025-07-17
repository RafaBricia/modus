import { PatchClientRepository, MongoClient, Client, PatchClientParams, ObjectId } from '../../../controllers/protocols'

export class MongoPatchClientRepository implements PatchClientRepository{

    async patchClient(id: string, params: PatchClientParams): Promise<Client> {
        
        await MongoClient.db.collection("Client")
        .updateMany({id: new ObjectId(id)},{
            $set:{
                ...params
            }
        })

        const client = await MongoClient.db.collection<Omit<Client, "id">>("Client").findOne({_id: new ObjectId(id)})

        if(!client){
            throw new Error("Error not Client")
        }

        const {_id, ...rest} = client

        return {id: client._id.toHexString(), ...rest}

    }


}
