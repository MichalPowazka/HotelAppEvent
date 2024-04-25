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

import { AddOpinionRequest } from '../models/add-opinion-request';
import { AddOpinionResponse } from '../models/add-opinion-response';
import { UpdateOpinionRequest } from '../models/update-opinion-request';
import { UpdateOpinionResponse } from '../models/update-opinion-response';

@Injectable({
  providedIn: 'root',
})
export class OpinionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation opinionAddOpinionPost
   */
  static readonly OpinionAddOpinionPostPath = '/Opinion/AddOpinion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `opinionAddOpinionPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionAddOpinionPost$Plain$Response(params?: {
    body?: AddOpinionRequest
  }): Observable<StrictHttpResponse<AddOpinionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OpinionService.OpinionAddOpinionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddOpinionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `opinionAddOpinionPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionAddOpinionPost$Plain(params?: {
    body?: AddOpinionRequest
  }): Observable<AddOpinionResponse> {

    return this.opinionAddOpinionPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AddOpinionResponse>) => r.body as AddOpinionResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `opinionAddOpinionPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionAddOpinionPost$Json$Response(params?: {
    body?: AddOpinionRequest
  }): Observable<StrictHttpResponse<AddOpinionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OpinionService.OpinionAddOpinionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddOpinionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `opinionAddOpinionPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionAddOpinionPost$Json(params?: {
    body?: AddOpinionRequest
  }): Observable<AddOpinionResponse> {

    return this.opinionAddOpinionPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AddOpinionResponse>) => r.body as AddOpinionResponse)
    );
  }

  /**
   * Path part for operation opinionUpdateOpinionPost
   */
  static readonly OpinionUpdateOpinionPostPath = '/Opinion/UpdateOpinion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `opinionUpdateOpinionPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionUpdateOpinionPost$Plain$Response(params?: {
    body?: UpdateOpinionRequest
  }): Observable<StrictHttpResponse<UpdateOpinionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OpinionService.OpinionUpdateOpinionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateOpinionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `opinionUpdateOpinionPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionUpdateOpinionPost$Plain(params?: {
    body?: UpdateOpinionRequest
  }): Observable<UpdateOpinionResponse> {

    return this.opinionUpdateOpinionPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateOpinionResponse>) => r.body as UpdateOpinionResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `opinionUpdateOpinionPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionUpdateOpinionPost$Json$Response(params?: {
    body?: UpdateOpinionRequest
  }): Observable<StrictHttpResponse<UpdateOpinionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OpinionService.OpinionUpdateOpinionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateOpinionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `opinionUpdateOpinionPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  opinionUpdateOpinionPost$Json(params?: {
    body?: UpdateOpinionRequest
  }): Observable<UpdateOpinionResponse> {

    return this.opinionUpdateOpinionPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateOpinionResponse>) => r.body as UpdateOpinionResponse)
    );
  }

}
