import { DeleteAdministratorParams, DeleteAdministratorRepository, Administrator, MongoClient, ObjectId } from "../../../controllers/protocols";

export class MongoDeleteAdministratorRepository implements DeleteAdministratorRepository{
    async deleteAdministrator(id:string): Promise<Administrator> {
        const admin = await MongoClient.db.collection<Omit<Administrator, "id">>("Administrator").findOne({_id: new ObjectId(id)});

        if(!admin){
            throw new Error("Administrator not found")
        }

        const { deletedCount } = await MongoClient.db.collection("Administrator").deleteOne({_id: new ObjectId(id)})

        if(deletedCount === 0){
            throw new Error("Admininstrator not deleted")
        }

        const {_id, ...rest} = admin

        return {id: _id.toHexString(), ...rest}
    }
}