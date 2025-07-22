import { HttpRequest, HttpResponse, Category } from "../../protocols";

export interface DeleteCategoryRepository{
    deleteCategory(id:string):Promise<Category>
}

export interface DeleteCategoryController{
    handle(httpRequest: HttpRequest<DeleteCategoryParams>): Promise<HttpResponse<Category>>
}

export interface DeleteCategoryParams{
    id:string
}