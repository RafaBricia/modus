import {  DeleteClientRepository, Client, MongoClient, ObjectId } from "../../../controllers/protocols";

export class MongoDeleteClientRepository implements DeleteClientRepository{
    async deleteClient(id: string): Promise<Client> {
        
        const client = await MongoClient.db.collection<Omit<Client, "id">>("Client")
        .findOne({_id: new ObjectId(id)})

        if(!client){
            throw new Error("Client not deleted")

        }

        const {deletedCount}  = await MongoClient.db.collection("Client")
        .deleteOne({_id: new ObjectId(id)})

        if( deletedCount === 0){
            throw new Error("Client not deleted")

        }

        const {_id, ...rest} = client

        return {id: client?._id.toHexString(), ...rest}
    }
}