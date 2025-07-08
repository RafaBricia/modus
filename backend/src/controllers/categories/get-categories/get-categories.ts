import { GetCategoriesRepository, GetCategoriesController } from "./protocols";

export class getCategoriesController implements GetCategoriesController{
    constructor(private readonly getCategoriesRepository: GetCategoriesRepository){}

    async handle() {

        const categories = await this.getCategoriesRepository.getCategories();

        try{

            if (!categories || categories.length === 0){
                return {
                    statusCode: 404,
                    body: "Categories not found"
                }
            } else {
                return {
                    statusCode: 200,
                    body: categories
                }
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            }
        }

    }
}