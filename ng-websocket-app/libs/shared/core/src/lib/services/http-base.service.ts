import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';

export declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const httpOptions = {
    headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    } ),
    body: {},
    observe: 'response' as 'body',
    params: {}
};


class IPagedResult {
}

@Injectable()
export abstract class HttpBaseService {

    constructor(private httpClient: HttpClient ) { }

    protected get<T>( url: string, params?: any, isProtected: boolean = false ): Observable<T> {
        return this
            .request<T>( 'GET', url, null, params, false )
            .pipe( map( response => response.body ) );
    }

    protected post<T>( url: string, data: any, isProtected: boolean = false ): Observable<T> {
        return this
            .request<T>( 'POST', url, data, null, isProtected )
            .pipe( map( response => response.body ) );
    }

    protected delete<T>( url: string, data: any, isProtected: boolean = false ): Observable<T> {
        return this
            .request<T>( 'DELETE', url, data, null, isProtected )
            .pipe( map( response => response.body ) );
    }

    /**
     * Handle Http requests
     * Generic reusable Http Client request method
     * @param method: HttpMethod
     * @param url
     * @param data: to be posted or put
     * @param params: query string params
     * @param isProtected: is authentication needed?
     */
    private request<T>( method: HttpMethod, url: string, data?: T, params?: any, isProtected: boolean = false )
        : Observable<HttpResponse<T>> {
        if ( isProtected ) {
            const token = ''; // this.authService.getAccessToken();
            httpOptions.headers.append( 'Authorization', token );
        }

        httpOptions.body = data;
        httpOptions.params = createHttpParams( params );
        return this.httpClient.request<HttpResponse<T>>( method, url, httpOptions )
            .pipe(
                tap( response => console.log( 'request', method, response ) )
            );
    }

}

export function createHttpParams( params: {} ): HttpParams {
    let httpParams: HttpParams = new HttpParams();

    if ( params ) {
        Object.keys( params ).forEach( param => {
            if ( params[param] ) {
                console.log(param, params[param]);
                httpParams = httpParams.set( param, params[param] );
            }
        } );
    }

    return httpParams;
}

/*
* Creates an object that can be safely used as a json post object
* It will check lists for items and if no items are present will skip those
* */
// TODO: make nicer as length check is only difference
export function toSafeParams( params: {} ): {} {
    const httpParams = {};

    if ( params ) {
        Object.keys( params ).forEach( param => {
            // Array check
            if ( param as any instanceof Array ) {
                if ( params[param] && params[param].length ) {
                    // adds the property with the value
                    httpParams[param] = params[param];
                }
            } else {
                // Normal primitive check
                if ( params[param] && params[param] ) {
                    // adds the property with the value
                    httpParams[param] = params[param];
                }
            }
        } );
    }

    console.log('httpParams', httpParams);
    return httpParams;
}

