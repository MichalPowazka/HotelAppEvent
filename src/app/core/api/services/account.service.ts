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

import { ChangePasswordRequest } from '../models/change-password-request';
import { ChangePasswordResponse } from '../models/change-password-response';
import { ChangeStatusUserRequest } from '../models/change-status-user-request';
import { ChangeStatusUserResponse } from '../models/change-status-user-response';
import { GetUserHistoryResponse } from '../models/get-user-history-response';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { RegisterRequest } from '../models/register-request';
import { RegisterResponse } from '../models/register-response';
import { UpdateUserRequest } from '../models/update-user-request';
import { UpdateUserResponse } from '../models/update-user-response';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation accountLoginPost
   */
  static readonly AccountLoginPostPath = '/Account/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountLoginPost$Plain$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountLoginPost$Plain(params?: {
    body?: LoginRequest
  }): Observable<LoginResponse> {

    return this.accountLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponse>) => r.body as LoginResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountLoginPost$Json$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountLoginPost$Json(params?: {
    body?: LoginRequest
  }): Observable<LoginResponse> {

    return this.accountLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponse>) => r.body as LoginResponse)
    );
  }

  /**
   * Path part for operation accountRegisterPost
   */
  static readonly AccountRegisterPostPath = '/Account/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountRegisterPost$Plain$Response(params?: {
    body?: RegisterRequest
  }): Observable<StrictHttpResponse<RegisterResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountRegisterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegisterResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountRegisterPost$Plain(params?: {
    body?: RegisterRequest
  }): Observable<RegisterResponse> {

    return this.accountRegisterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<RegisterResponse>) => r.body as RegisterResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountRegisterPost$Json$Response(params?: {
    body?: RegisterRequest
  }): Observable<StrictHttpResponse<RegisterResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountRegisterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegisterResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountRegisterPost$Json(params?: {
    body?: RegisterRequest
  }): Observable<RegisterResponse> {

    return this.accountRegisterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<RegisterResponse>) => r.body as RegisterResponse)
    );
  }

  /**
   * Path part for operation accountUpdateUserPost
   */
  static readonly AccountUpdateUserPostPath = '/Account/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUpdateUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountUpdateUserPost$Plain$Response(params?: {
    body?: UpdateUserRequest
  }): Observable<StrictHttpResponse<UpdateUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUpdateUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUpdateUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountUpdateUserPost$Plain(params?: {
    body?: UpdateUserRequest
  }): Observable<UpdateUserResponse> {

    return this.accountUpdateUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateUserResponse>) => r.body as UpdateUserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUpdateUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountUpdateUserPost$Json$Response(params?: {
    body?: UpdateUserRequest
  }): Observable<StrictHttpResponse<UpdateUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUpdateUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUpdateUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountUpdateUserPost$Json(params?: {
    body?: UpdateUserRequest
  }): Observable<UpdateUserResponse> {

    return this.accountUpdateUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateUserResponse>) => r.body as UpdateUserResponse)
    );
  }

  /**
   * Path part for operation accountChangePasswordPost
   */
  static readonly AccountChangePasswordPostPath = '/Account/ChangePassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangePasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangePasswordPost$Plain$Response(params?: {
    body?: ChangePasswordRequest
  }): Observable<StrictHttpResponse<ChangePasswordResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountChangePasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChangePasswordResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountChangePasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangePasswordPost$Plain(params?: {
    body?: ChangePasswordRequest
  }): Observable<ChangePasswordResponse> {

    return this.accountChangePasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChangePasswordResponse>) => r.body as ChangePasswordResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangePasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangePasswordPost$Json$Response(params?: {
    body?: ChangePasswordRequest
  }): Observable<StrictHttpResponse<ChangePasswordResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountChangePasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChangePasswordResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountChangePasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangePasswordPost$Json(params?: {
    body?: ChangePasswordRequest
  }): Observable<ChangePasswordResponse> {

    return this.accountChangePasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ChangePasswordResponse>) => r.body as ChangePasswordResponse)
    );
  }

  /**
   * Path part for operation accountChangeStatusUserPost
   */
  static readonly AccountChangeStatusUserPostPath = '/Account/ChangeStatusUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangeStatusUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangeStatusUserPost$Plain$Response(params?: {
    body?: ChangeStatusUserRequest
  }): Observable<StrictHttpResponse<ChangeStatusUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountChangeStatusUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChangeStatusUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountChangeStatusUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangeStatusUserPost$Plain(params?: {
    body?: ChangeStatusUserRequest
  }): Observable<ChangeStatusUserResponse> {

    return this.accountChangeStatusUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChangeStatusUserResponse>) => r.body as ChangeStatusUserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangeStatusUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangeStatusUserPost$Json$Response(params?: {
    body?: ChangeStatusUserRequest
  }): Observable<StrictHttpResponse<ChangeStatusUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountChangeStatusUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChangeStatusUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountChangeStatusUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  accountChangeStatusUserPost$Json(params?: {
    body?: ChangeStatusUserRequest
  }): Observable<ChangeStatusUserResponse> {

    return this.accountChangeStatusUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ChangeStatusUserResponse>) => r.body as ChangeStatusUserResponse)
    );
  }

  /**
   * Path part for operation accountGetUserHistoryGet
   */
  static readonly AccountGetUserHistoryGetPath = '/Account/GetUserHistory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetUserHistoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserHistoryGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<GetUserHistoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountGetUserHistoryGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUserHistoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountGetUserHistoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserHistoryGet$Plain(params?: {
    Id?: number;
  }): Observable<GetUserHistoryResponse> {

    return this.accountGetUserHistoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetUserHistoryResponse>) => r.body as GetUserHistoryResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetUserHistoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserHistoryGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<GetUserHistoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountGetUserHistoryGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUserHistoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountGetUserHistoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserHistoryGet$Json(params?: {
    Id?: number;
  }): Observable<GetUserHistoryResponse> {

    return this.accountGetUserHistoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetUserHistoryResponse>) => r.body as GetUserHistoryResponse)
    );
  }

}
