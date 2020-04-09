import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from '../services/toastr.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    private toastConfig = {
        destroyByClick: true,
        duration: 5000,
    };

    constructor(
        private messenger: ToastrService,
        private loader: LoadingBarService ) {}

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                // 401 handled in auth.interceptor
                if (error && error.status !== 401) {
                    console.log('Error Interceptor');
                    this.messenger.danger( error.message, 'Something has gone wrong.', this.toastConfig );
                }

                this.loader.stop();

                return throwError(error);
            })
        );
    }
}
