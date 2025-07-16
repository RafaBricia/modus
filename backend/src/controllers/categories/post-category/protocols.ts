import { HttpRequest, HttpResponse, Category } from "../../protocols";

export interface PostCategoryParams{
    id: string;
    tipo: "Camisas"| "Saias"| "Calças"| "Sutiãs"| "Calcinhas"| "Cropped"| "Meias"
}

export interface PostCategoryController{
    handle(httpRequest: HttpRequest<PostCategoryParams>): Promise<HttpResponse<Category>>
}

export interface PostCategoryRepository{
    postCategory(parms: PostCategoryParams): Promise<Category>
}