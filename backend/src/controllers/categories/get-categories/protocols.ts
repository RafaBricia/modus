import { HttpResponse, Category } from "../../protocols";

export interface GetCategoriesRepository {
    getCategories(): Promise<Category[] | null>
}

export interface GetCategoriesController {
    handle(): Promise<HttpResponse<Category[] | string>>
}
