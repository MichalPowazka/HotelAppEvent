/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface ReservationDto {
  dateFrom?: string;
  dateTo?: string;
  reservationUniqueId?: null | string;
  user?: User;
}
