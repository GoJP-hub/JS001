import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonInterceptor } from "src/app/intercepts/common-interceptor";
import { MockBackendInterceptor } from "src/app/intercepts/mock-backend-interceptor";

export const environment = {
  production: true,
  homeUrl: 'http://localhost:4200',
  apiUrl: 'http://localhost:8080',
  
  httpInterceptorProviders: [
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true}
  ]
};
