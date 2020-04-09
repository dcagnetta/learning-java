/**
 * The `ToastrService` provides a capability to build toast notifications.
 *
 *  * @NgModule({
 *   imports: [
 *     // ...
 *   ],
 *   providers: [
 *      {provide: ToastrService, useClass: NbToastrService}
 *   ]
 * })
 * */
export abstract class ToastrService {
  abstract show(message: any, title?: any, config?: Partial<any>): any;
  abstract success(message: any, title?: any, config?: Partial<any>): any;
  abstract info(message: any, title?: any, config?: Partial<any>): any;
  abstract warning(message: any, title?: any, config?: Partial<any>): any;
  abstract primary(message: any, title?: any, config?: Partial<any>): any;
  abstract danger(message: any, title?: any, config?: Partial<any>): any;
  abstract default(message: any, title?: any, config?: Partial<any>): any;
}
