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

import { AddBookingRequest } from '../models/add-booking-request';
import { AddBookingResponse } from '../models/add-booking-response';
import { CancelReservationRequest } from '../models/cancel-reservation-request';
import { CancelReservationResponse } from '../models/cancel-reservation-response';
import { CheckAvailabilityResponse } from '../models/check-availability-response';
import { GetReservationResposne } from '../models/get-reservation-resposne';
import { GetReservationsAllQueryRequest } from '../models/get-reservations-all-query-request';
import { GetReservationsAllResponse } from '../models/get-reservations-all-response';
import { GetResevrationsLoggedUserQueryRequest } from '../models/get-resevrations-logged-user-query-request';
import { GetResevrationsLoggedUserResponse } from '../models/get-resevrations-logged-user-response';
import { UpdateReservationRequest } from '../models/update-reservation-request';
import { UpdateReservationResponse } from '../models/update-reservation-response';

@Injectable({
  providedIn: 'root',
})
export class ReseravationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation reseravationAddReservationPost
   */
  static readonly ReseravationAddReservationPostPath = '/Reseravation/AddReservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationAddReservationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationAddReservationPost$Plain$Response(params?: {
    body?: AddBookingRequest
  }): Observable<StrictHttpResponse<AddBookingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationAddReservationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddBookingResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationAddReservationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationAddReservationPost$Plain(params?: {
    body?: AddBookingRequest
  }): Observable<AddBookingResponse> {

    return this.reseravationAddReservationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AddBookingResponse>) => r.body as AddBookingResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationAddReservationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationAddReservationPost$Json$Response(params?: {
    body?: AddBookingRequest
  }): Observable<StrictHttpResponse<AddBookingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationAddReservationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddBookingResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationAddReservationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationAddReservationPost$Json(params?: {
    body?: AddBookingRequest
  }): Observable<AddBookingResponse> {

    return this.reseravationAddReservationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AddBookingResponse>) => r.body as AddBookingResponse)
    );
  }

  /**
   * Path part for operation reseravationCancelReservationPost
   */
  static readonly ReseravationCancelReservationPostPath = '/Reseravation/CancelReservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationCancelReservationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationCancelReservationPost$Plain$Response(params?: {
    body?: CancelReservationRequest
  }): Observable<StrictHttpResponse<CancelReservationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationCancelReservationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CancelReservationResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationCancelReservationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationCancelReservationPost$Plain(params?: {
    body?: CancelReservationRequest
  }): Observable<CancelReservationResponse> {

    return this.reseravationCancelReservationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CancelReservationResponse>) => r.body as CancelReservationResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationCancelReservationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationCancelReservationPost$Json$Response(params?: {
    body?: CancelReservationRequest
  }): Observable<StrictHttpResponse<CancelReservationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationCancelReservationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CancelReservationResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationCancelReservationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationCancelReservationPost$Json(params?: {
    body?: CancelReservationRequest
  }): Observable<CancelReservationResponse> {

    return this.reseravationCancelReservationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CancelReservationResponse>) => r.body as CancelReservationResponse)
    );
  }

  /**
   * Path part for operation reseravationUpdateReservationPost
   */
  static readonly ReseravationUpdateReservationPostPath = '/Reseravation/UpdateReservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationUpdateReservationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationUpdateReservationPost$Plain$Response(params?: {
    body?: UpdateReservationRequest
  }): Observable<StrictHttpResponse<UpdateReservationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationUpdateReservationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateReservationResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationUpdateReservationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationUpdateReservationPost$Plain(params?: {
    body?: UpdateReservationRequest
  }): Observable<UpdateReservationResponse> {

    return this.reseravationUpdateReservationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateReservationResponse>) => r.body as UpdateReservationResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationUpdateReservationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationUpdateReservationPost$Json$Response(params?: {
    body?: UpdateReservationRequest
  }): Observable<StrictHttpResponse<UpdateReservationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationUpdateReservationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateReservationResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationUpdateReservationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reseravationUpdateReservationPost$Json(params?: {
    body?: UpdateReservationRequest
  }): Observable<UpdateReservationResponse> {

    return this.reseravationUpdateReservationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UpdateReservationResponse>) => r.body as UpdateReservationResponse)
    );
  }

  /**
   * Path part for operation reseravationCheckAvailabilityGet
   */
  static readonly ReseravationCheckAvailabilityGetPath = '/Reseravation/CheckAvailability';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationCheckAvailabilityGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationCheckAvailabilityGet$Plain$Response(params?: {
    Id?: number;
    DateFrom?: string;
    DateTo?: string;
  }): Observable<StrictHttpResponse<CheckAvailabilityResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationCheckAvailabilityGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('DateFrom', params.DateFrom, {});
      rb.query('DateTo', params.DateTo, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CheckAvailabilityResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationCheckAvailabilityGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationCheckAvailabilityGet$Plain(params?: {
    Id?: number;
    DateFrom?: string;
    DateTo?: string;
  }): Observable<CheckAvailabilityResponse> {

    return this.reseravationCheckAvailabilityGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CheckAvailabilityResponse>) => r.body as CheckAvailabilityResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationCheckAvailabilityGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationCheckAvailabilityGet$Json$Response(params?: {
    Id?: number;
    DateFrom?: string;
    DateTo?: string;
  }): Observable<StrictHttpResponse<CheckAvailabilityResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationCheckAvailabilityGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('DateFrom', params.DateFrom, {});
      rb.query('DateTo', params.DateTo, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CheckAvailabilityResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationCheckAvailabilityGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationCheckAvailabilityGet$Json(params?: {
    Id?: number;
    DateFrom?: string;
    DateTo?: string;
  }): Observable<CheckAvailabilityResponse> {

    return this.reseravationCheckAvailabilityGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CheckAvailabilityResponse>) => r.body as CheckAvailabilityResponse)
    );
  }

  /**
   * Path part for operation reseravationGetReservationByIdGet
   */
  static readonly ReseravationGetReservationByIdGetPath = '/Reseravation/GetReservationById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationGetReservationByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByIdGet$Plain$Response(params?: {
    RoomId?: number;
  }): Observable<StrictHttpResponse<GetReservationResposne>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationGetReservationByIdGetPath, 'get');
    if (params) {
      rb.query('RoomId', params.RoomId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetReservationResposne>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationGetReservationByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByIdGet$Plain(params?: {
    RoomId?: number;
  }): Observable<GetReservationResposne> {

    return this.reseravationGetReservationByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetReservationResposne>) => r.body as GetReservationResposne)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationGetReservationByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByIdGet$Json$Response(params?: {
    RoomId?: number;
  }): Observable<StrictHttpResponse<GetReservationResposne>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationGetReservationByIdGetPath, 'get');
    if (params) {
      rb.query('RoomId', params.RoomId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetReservationResposne>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationGetReservationByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByIdGet$Json(params?: {
    RoomId?: number;
  }): Observable<GetReservationResposne> {

    return this.reseravationGetReservationByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetReservationResposne>) => r.body as GetReservationResposne)
    );
  }

  /**
   * Path part for operation reseravationGetReservationsAllGet
   */
  static readonly ReseravationGetReservationsAllGetPath = '/Reseravation/GetReservationsAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationGetReservationsAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationsAllGet$Plain$Response(params?: {
    request?: GetReservationsAllQueryRequest;
  }): Observable<StrictHttpResponse<GetReservationsAllResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationGetReservationsAllGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetReservationsAllResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationGetReservationsAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationsAllGet$Plain(params?: {
    request?: GetReservationsAllQueryRequest;
  }): Observable<GetReservationsAllResponse> {

    return this.reseravationGetReservationsAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetReservationsAllResponse>) => r.body as GetReservationsAllResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationGetReservationsAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationsAllGet$Json$Response(params?: {
    request?: GetReservationsAllQueryRequest;
  }): Observable<StrictHttpResponse<GetReservationsAllResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationGetReservationsAllGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetReservationsAllResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationGetReservationsAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationsAllGet$Json(params?: {
    request?: GetReservationsAllQueryRequest;
  }): Observable<GetReservationsAllResponse> {

    return this.reseravationGetReservationsAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetReservationsAllResponse>) => r.body as GetReservationsAllResponse)
    );
  }

  /**
   * Path part for operation reseravationGetReservationByUserGet
   */
  static readonly ReseravationGetReservationByUserGetPath = '/Reseravation/GetReservationByUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationGetReservationByUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByUserGet$Plain$Response(params?: {
    request?: GetResevrationsLoggedUserQueryRequest;
  }): Observable<StrictHttpResponse<GetResevrationsLoggedUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationGetReservationByUserGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetResevrationsLoggedUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationGetReservationByUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByUserGet$Plain(params?: {
    request?: GetResevrationsLoggedUserQueryRequest;
  }): Observable<GetResevrationsLoggedUserResponse> {

    return this.reseravationGetReservationByUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetResevrationsLoggedUserResponse>) => r.body as GetResevrationsLoggedUserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reseravationGetReservationByUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByUserGet$Json$Response(params?: {
    request?: GetResevrationsLoggedUserQueryRequest;
  }): Observable<StrictHttpResponse<GetResevrationsLoggedUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ReseravationService.ReseravationGetReservationByUserGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetResevrationsLoggedUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reseravationGetReservationByUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reseravationGetReservationByUserGet$Json(params?: {
    request?: GetResevrationsLoggedUserQueryRequest;
  }): Observable<GetResevrationsLoggedUserResponse> {

    return this.reseravationGetReservationByUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetResevrationsLoggedUserResponse>) => r.body as GetResevrationsLoggedUserResponse)
    );
  }

}
