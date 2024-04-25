/* tslint:disable */
/* eslint-disable */
import { UserHistoryDto } from './user-history-dto';
export interface GetUserHistoryResponse {
  history?: null | Array<UserHistoryDto>;
  isSuccess?: boolean;
  message?: null | string;
}
