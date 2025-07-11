import { HttpResponse , Category } from "../../protocols";

export interface GetCategoryRespository{
    getCategory(id:string): Promise<Category | null>
}

export interface GetCategoryController {
    handle(id:string): Promise<HttpResponse<Category | string>>;
}

