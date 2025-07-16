import { MongoClient, Administrator, PostAdministratorRepository, PostAdmininstratorParams } from "../../../controllers/protocols";

export class MongoPostAdministrator implements PostAdministratorRepository {

    async postAdmininstrator(params: PostAdmininstratorParams): Promise<Administrator>{

        const insertID = await MongoClient.db
        .collection("Administrators")
        .insertOne({params})

        const admin = await MongoClient.db
        .collection<Omit<Administrator, "id">>("Administrator")
        .findOne({_id: insertID})

        if(!admin){
            throw new Error("Administartor not inserted")
        }

        const {_id, ...rest} = admin

        return {id:admin._id.toHexString(), ...rest} as Administrator;
    }
}
