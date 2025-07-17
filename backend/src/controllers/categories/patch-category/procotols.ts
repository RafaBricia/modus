import { HttpRequest, Category } from "../../protocols";

export interface PatchCategoryParams {
    id?: string;
    tipo?: "Camisas"| "Saias"| "Calças"| "Sutiãs"| "Calcinhas"| "Cropped"| "Meias"
}

export interface PatchCategoryController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpRequest<Category>>
}

export interface PatchCategoryRepository {
    patchCategory(id: string, params:PatchCategoryParams): Promise<Category>
}