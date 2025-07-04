import { Cart } from '../../../models/cart';
import { HttpResponse } from '../../protocols';
import { GetCartsController, GetCartsRepositories } from './protocols';

export class getCartsController implements GetCartsController {

    constructor(private readonly getCartsRepositories: GetCartsRepositories) {}

    async handle() {

        const carts = await this.getCartsRepositories.getCarts();

        try {
            if (!carts || carts.length === 0) {
                return {
                    statusCode: 404,
                    body: "Carts not found"
                };
            }
            else {
                return {
                    statusCode: 200,
                    body: carts
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