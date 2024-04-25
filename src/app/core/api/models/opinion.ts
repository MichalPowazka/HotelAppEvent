/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface Opinion {
  id?: number;
  rating?: number;
  roomId?: number;
  text?: null | string;
  user?: User;
}
