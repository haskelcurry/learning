/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';


/**
 * User-related stuff
 */
@Injectable({
  providedIn: 'root',
})
export class UsersBackendService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUsers
   */
  static readonly GetUsersPath = '/users';

  /**
   * Get all users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserDTO>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersBackendService.GetUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json; charset&#x3D;utf-8'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }

  /**
   * Get all users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers(params?: {
  }): Observable<Array<UserDTO>> {

    return this.getUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDTO>>) => r.body as Array<UserDTO>)
    );
  }

  /**
   * Path part for operation getUserData
   */
  static readonly GetUserDataPath = '/users/{id}';

  /**
   * Get user data by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserData$Response(params: {

    /**
     * ID of user to fetch
     */
    id: number;
  }): Observable<StrictHttpResponse<UserDTO>> {

    const rb = new RequestBuilder(this.rootUrl, UsersBackendService.GetUserDataPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json; charset&#x3D;utf-8'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDTO>;
      })
    );
  }

  /**
   * Get user data by ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserData(params: {

    /**
     * ID of user to fetch
     */
    id: number;
  }): Observable<UserDTO> {

    return this.getUserData$Response(params).pipe(
      map((r: StrictHttpResponse<UserDTO>) => r.body as UserDTO)
    );
  }

}
