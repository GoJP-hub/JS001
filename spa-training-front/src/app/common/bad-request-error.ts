import { AppError } from "./app-error";

export class BadRequestError extends AppError {
    constructor(err?: any){
        super();
    }
}