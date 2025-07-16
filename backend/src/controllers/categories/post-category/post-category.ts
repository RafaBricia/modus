import { HttpRequest, HttpResponse, PostCategoryController, PostCategoryParams, PostCategoryRepository, Category } from "../../protocols";

export class postCategoryController implements PostCategoryController{

    constructor(private readonly postCategoryRepository: PostCategoryRepository){}

    async handle(httpRequest: HttpRequest<PostCategoryParams>): Promise<HttpResponse<Category>>{

        try {

            if(!httpRequest.body || httpRequest.body === null) {
                return{
                    statusCode: 400,
                    body: "No body"
                }
            }

            if(!httpRequest.body.tipo){
                return{
                    statusCode:400,
                    body: "Missing param: Tipo"
                }
            }

            const category = await this.postCategoryRepository.postCategory(httpRequest.body)

            return{
                statusCode:201,
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