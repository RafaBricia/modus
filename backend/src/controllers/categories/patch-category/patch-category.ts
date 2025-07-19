import { PatchCategoryController, PatchCategoryRepository, PatchCategoryParams, HttpRequest, HttpResponse, Category } from "../../protocols";

export class patchCategoryController implements PatchCategoryController {
    constructor(private readonly patchCategoryRepository: PatchCategoryRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Category>>{

        try{

            const id = httpRequest.params.id
            const body = httpRequest.body

            if(!id){
                return {
                    statusCode:400,
                    body: "Missing Category ID"
                }
            }

            const allowedFieldToUpdate: (keyof PatchCategoryParams)  [] = [
                "tipo"
            ]

            const someFieldNotAllowedToUpdate = Object.keys(body).some((key) => !allowedFieldToUpdate.includes(key as keyof PatchCategoryParams))

            if(someFieldNotAllowedToUpdate){
                return {
                    statusCode:400,
                    body: "Some received field is not allowed"
                }
            }

            const category = await this.patchCategoryRepository.patchCategory(id, body)

            return {
                statusCode:200,
                body: category
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal server error"
            }
        }

    }
}