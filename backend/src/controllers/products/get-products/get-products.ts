import { GetProductsController, GetProductsRepository } from "./protocols";
import { HttpResponse } from "../../protocols";
import { Product } from "../../../models/product";


export class getProductsController implements GetProductsController{

    constructor(private readonly getProductsRepository: GetProductsRepository){}

    async handle(){
        const products = await this.getProductsRepository.getProducts();
        try{

            if(!products){
                return {
                    statusCode: 404,
                    body: "Products not found"
                };
            } else {
                return {
                    statusCode: 200,
                    body: products
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