// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonInterceptor } from "src/app/intercepts/common-interceptor";
import { MockBackendInterceptor } from "src/app/intercepts/mock-backend-interceptor";

export const environment = {
  production: false,
  homeUrl: 'http://localhost:4200',
  apiUrl: 'http://localhost:8080',
  
  httpInterceptorProviders: [
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true},
    // { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true}
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
