/* tslint:disable */
/* eslint-disable */
import { Opinion } from './opinion';
import { RoomImage } from './room-image';
export interface Room {
  apartamentNumber?: null | string;
  city?: null | string;
  controlValue?: null | string;
  description?: null | string;
  houseNumber?: null | string;
  id?: number;
  images?: null | Array<RoomImage>;
  isActive?: boolean;
  name?: null | string;
  opinions?: null | Array<Opinion>;
  postCode?: null | string;
  roomStream?: null | string;
  street?: null | string;
}
