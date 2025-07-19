import { HttpRequest, HttpResponse, Category } from "../../protocols";

export interface DeleteCategoryRepository{
    deleteCategory(params:DeleteCategoryParams):Promise<Category>
}

export interface DeleteCategoryController{
    handle(httpRequest: HttpRequest<DeleteCategoryParams>): Promise<HttpResponse<Category>>
}

export interface DeleteCategoryParams{
    id:string
}