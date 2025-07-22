import { DeleteCategoryController, DeleteCategoryParams, DeleteCategoryRepository, Category, HttpRequest, HttpResponse } from "../../protocols";

export class deleteCategoryController implements DeleteCategoryController{

    constructor(private readonly deleteCategoryRepository: DeleteCategoryRepository ){}

    async handle(httpRequest: HttpRequest<DeleteCategoryParams>): Promise<HttpResponse<Category>> {
        
        try{

            const id = httpRequest?.params?.id

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing Category ID"
                }
            }

            const category = await this.deleteCategoryRepository.deleteCategory(id)

            return{
                statusCode:200,
                body: category
            }
        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }
}