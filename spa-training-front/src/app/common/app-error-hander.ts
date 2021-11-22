import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(err: any){
        console.log('ERROR: ' + JSON.stringify(err))
    }
}