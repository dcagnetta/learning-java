import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationsInterceptor } from './notifications.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NotificationsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
