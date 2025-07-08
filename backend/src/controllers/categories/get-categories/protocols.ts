import { HttpResponse } from "../../protocols";
import { Category } from "../../../models/category";

export interface GetCategoriesRepository {
    getCategories(): Promise<Category[] | null>
}

export interface GetCategoriesController {
    handle(): Promise<HttpResponse<Category[] | string>>
}
