import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  protected handleError(err: Response){
    if(err.status === 400){
      return throwError(new BadRequestError(err))
    }
    if(err.status === 404){
      return throwError(new NotFoundError(err))
    }
    return throwError(new AppError(err));
  }
}
