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

import { AddRoomRequest } from '../models/add-room-request';
import { AddRoomResponse } from '../models/add-room-response';
import { ChangeRoomStatusRequest } from '../models/change-room-status-request';
import { ChangeRoomStatusResponse } from '../models/change-room-status-response';
import { DeleteFileRequest } from '../models/delete-file-request';
import { DeleteFileResponse } from '../models/delete-file-response';
import { GetRoomAllQueryRequest } from '../models/get-room-all-query-request';
import { GetRoomAllResponse } from '../models/get-room-all-response';
import { GetRoomByIdResponse } from '../models/get-room-by-id-response';
import { UpdateRoomRequest } from '../models/update-room-request';
import { UpdateRoomResponse } from '../models/update-room-response';
import { UploadFileResponse } from '../models/upload-file-response';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation roomAddRoomPost
   */
  static readonly RoomAddRoomPostPath = '/Room/AddRoom';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomAddRoomPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomAddRoomPost$Plain$Response(params?: {
    body?: AddRoomRequest
  }): Observable<StrictHttpResponse<AddRoomResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomAddRoomPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddRoomResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomAddRoomPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomAddRoomPost$Plain(params?: {
    body?: AddRoomRequest
  }): Observable<AddRoomResponse> {

    return this.roomAddRoomPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AddRoomResponse>) => r.body as AddRoomResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomAddRoomPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomAddRoomPost$Json$Response(params?: {
    body?: AddRoomRequest
  }): Observable<StrictHttpResponse<AddRoomResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomAddRoomPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddRoomResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomAddRoomPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomAddRoomPost$Json(params?: {
    body?: AddRoomRequest
  }): Observable<AddRoomResponse> {

    return this.roomAddRoomPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AddRoomResponse>) => r.body as AddRoomResponse)
    );
  }

  /**
   * Path part for operation roomUpdateRoomPut
   */
  static readonly RoomUpdateRoomPutPath = '/Room/UpdateRoom';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomUpdateRoomPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomUpdateRoomPut$Plain$Response(params?: {
    body?: UpdateRoomRequest
  }): Observable<StrictHttpResponse<UpdateRoomResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomUpdateRoomPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateRoomResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomUpdateRoomPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomUpdateRoomPut$Plain(params?: {
    body?: UpdateRoomRequest
  }): Observable<UpdateRoomResponse> {

    return this.roomUpdateRoomPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateRoomResponse>) => r.body as UpdateRoomResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomUpdateRoomPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomUpdateRoomPut$Json$Response(params?: {
    body?: UpdateRoomRequest
  }): Observable<StrictHttpResponse<UpdateRoomResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomUpdateRoomPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateRoomResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomUpdateRoomPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomUpdateRoomPut$Json(params?: {
    body?: UpdateRoomRequest
  }): Observable<UpdateRoomResponse> {

    return this.roomUpdateRoomPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateRoomResponse>) => r.body as UpdateRoomResponse)
    );
  }

  /**
   * Path part for operation roomChangeRoomStatusPost
   */
  static readonly RoomChangeRoomStatusPostPath = '/Room/ChangeRoomStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomChangeRoomStatusPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomChangeRoomStatusPost$Plain$Response(params?: {
    body?: ChangeRoomStatusRequest
  }): Observable<StrictHttpResponse<ChangeRoomStatusResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomChangeRoomStatusPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChangeRoomStatusResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomChangeRoomStatusPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomChangeRoomStatusPost$Plain(params?: {
    body?: ChangeRoomStatusRequest
  }): Observable<ChangeRoomStatusResponse> {

    return this.roomChangeRoomStatusPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChangeRoomStatusResponse>) => r.body as ChangeRoomStatusResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomChangeRoomStatusPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomChangeRoomStatusPost$Json$Response(params?: {
    body?: ChangeRoomStatusRequest
  }): Observable<StrictHttpResponse<ChangeRoomStatusResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomChangeRoomStatusPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChangeRoomStatusResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomChangeRoomStatusPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomChangeRoomStatusPost$Json(params?: {
    body?: ChangeRoomStatusRequest
  }): Observable<ChangeRoomStatusResponse> {

    return this.roomChangeRoomStatusPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ChangeRoomStatusResponse>) => r.body as ChangeRoomStatusResponse)
    );
  }

  /**
   * Path part for operation roomGetRoomByIdGet
   */
  static readonly RoomGetRoomByIdGetPath = '/Room/GetRoomById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomGetRoomByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomByIdGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<GetRoomByIdResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomGetRoomByIdGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetRoomByIdResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomGetRoomByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomByIdGet$Plain(params?: {
    Id?: number;
  }): Observable<GetRoomByIdResponse> {

    return this.roomGetRoomByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetRoomByIdResponse>) => r.body as GetRoomByIdResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomGetRoomByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomByIdGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<GetRoomByIdResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomGetRoomByIdGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetRoomByIdResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomGetRoomByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomByIdGet$Json(params?: {
    Id?: number;
  }): Observable<GetRoomByIdResponse> {

    return this.roomGetRoomByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetRoomByIdResponse>) => r.body as GetRoomByIdResponse)
    );
  }

  /**
   * Path part for operation roomGetRoomAllGet
   */
  static readonly RoomGetRoomAllGetPath = '/Room/GetRoomAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomGetRoomAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomAllGet$Plain$Response(params?: {
    request?: GetRoomAllQueryRequest;
  }): Observable<StrictHttpResponse<GetRoomAllResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomGetRoomAllGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetRoomAllResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomGetRoomAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomAllGet$Plain(params?: {
    request?: GetRoomAllQueryRequest;
  }): Observable<GetRoomAllResponse> {

    return this.roomGetRoomAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetRoomAllResponse>) => r.body as GetRoomAllResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomGetRoomAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomAllGet$Json$Response(params?: {
    request?: GetRoomAllQueryRequest;
  }): Observable<StrictHttpResponse<GetRoomAllResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomGetRoomAllGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetRoomAllResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomGetRoomAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomGetRoomAllGet$Json(params?: {
    request?: GetRoomAllQueryRequest;
  }): Observable<GetRoomAllResponse> {

    return this.roomGetRoomAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetRoomAllResponse>) => r.body as GetRoomAllResponse)
    );
  }

  /**
   * Path part for operation roomUploadFilePost
   */
  static readonly RoomUploadFilePostPath = '/Room/UploadFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomUploadFilePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  roomUploadFilePost$Plain$Response(params?: {
    RoomId?: number;
    body?: {
'File'?: Blob;
}
  }): Observable<StrictHttpResponse<UploadFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomUploadFilePostPath, 'post');
    if (params) {
      rb.query('RoomId', params.RoomId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadFileResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomUploadFilePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  roomUploadFilePost$Plain(params?: {
    RoomId?: number;
    body?: {
'File'?: Blob;
}
  }): Observable<UploadFileResponse> {

    return this.roomUploadFilePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UploadFileResponse>) => r.body as UploadFileResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomUploadFilePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  roomUploadFilePost$Json$Response(params?: {
    RoomId?: number;
    body?: {
'File'?: Blob;
}
  }): Observable<StrictHttpResponse<UploadFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomUploadFilePostPath, 'post');
    if (params) {
      rb.query('RoomId', params.RoomId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadFileResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomUploadFilePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  roomUploadFilePost$Json(params?: {
    RoomId?: number;
    body?: {
'File'?: Blob;
}
  }): Observable<UploadFileResponse> {

    return this.roomUploadFilePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UploadFileResponse>) => r.body as UploadFileResponse)
    );
  }

  /**
   * Path part for operation roomDeleteFileDelete
   */
  static readonly RoomDeleteFileDeletePath = '/Room/DeleteFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomDeleteFileDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomDeleteFileDelete$Plain$Response(params?: {
    body?: DeleteFileRequest
  }): Observable<StrictHttpResponse<DeleteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomDeleteFileDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeleteFileResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomDeleteFileDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomDeleteFileDelete$Plain(params?: {
    body?: DeleteFileRequest
  }): Observable<DeleteFileResponse> {

    return this.roomDeleteFileDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeleteFileResponse>) => r.body as DeleteFileResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomDeleteFileDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomDeleteFileDelete$Json$Response(params?: {
    body?: DeleteFileRequest
  }): Observable<StrictHttpResponse<DeleteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RoomService.RoomDeleteFileDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeleteFileResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomDeleteFileDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  roomDeleteFileDelete$Json(params?: {
    body?: DeleteFileRequest
  }): Observable<DeleteFileResponse> {

    return this.roomDeleteFileDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DeleteFileResponse>) => r.body as DeleteFileResponse)
    );
  }

}
