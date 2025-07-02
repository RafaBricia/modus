import { GetClientRepository } from "../../../controllers/clients/get-client /protocols";
import { MongoClient } from "../../../database/mongo";
import { Client } from "../../../models/client";
import { ObjectId } from "mongodb";

export class MongoGetClientsRepository implements GetClientRepository {
    async getClient(id: string): Promise<Client | null> {
      const client = await MongoClient.db
        .collection<Omit<Client, "id">>("clientes")
        .findOne({ _id: new ObjectId(id) });
  
      return client ? { id: client._id.toHexString(), ...client } : null;
    }
  }
  