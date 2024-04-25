/* tslint:disable */
/* eslint-disable */
import { Opinion } from './opinion';
import { ReservationDto } from './reservation-dto';
export interface GetRoomByIdResponse {
  apartamentNumber?: null | string;
  city?: null | string;
  description?: null | string;
  houseNumber?: null | string;
  id?: number;
  isSuccess?: boolean;
  name?: null | string;
  opinions?: null | Array<Opinion>;
  postCode?: null | string;
  reservations?: null | Array<ReservationDto>;
  roomStream?: null | string;
  street?: null | string;
}
