import { PostClientParams, PostClientRepository, MongoClient, Client } from "../../../controllers/protocols";

export class MongoPostClient implements PostClientRepository{

    async postClient(params: PostClientParams): Promise<Client>{

        const insertedID = await MongoClient.db
        .collection("Clients")
        .insertOne({params});


        const client = await MongoClient.db
        .collection<Omit<Client, "id">>("Client")
        .findOne({_id: insertedID})

        if (!client) {
            throw new Error("Client not inserted");
        }


        const {_id, ...rest} = client

        return {id: client._id.toHexString(), ...rest} as Client;


    }
}
