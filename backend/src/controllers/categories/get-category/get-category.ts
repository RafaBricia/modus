import { HttpResponse, Category, GetCategoryController, GetCategoryRespository } from "../../protocols";

export class getCategoryController implements GetCategoryController{

    constructor(private readonly getCategoryRepository: GetCategoryRespository){}

    async handle(id:string): Promise<HttpResponse<Category | string>>{

        const category = await this.getCategoryRepository.getCategory(id);

        try {

            if(!category){
                return {
                    statusCode: 404,
                    body: "Category not found"
                };
            } else {
                return {
                    statusCode: 200,
                    body: category
                };
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }

}