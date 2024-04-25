/* tslint:disable */
/* eslint-disable */
export interface User {
  accessFailedCount?: number;
  concurrencyStamp?: null | string;
  email?: null | string;
  emailConfirmed?: boolean;
  firstName?: null | string;
  id?: number;
  isActive?: boolean;
  lastName?: null | string;
  lockoutEnabled?: boolean;
  lockoutEnd?: null | string;
  normalizedEmail?: null | string;
  normalizedUserName?: null | string;
  passwordHash?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  securityStamp?: null | string;
  streamId?: null | string;
  twoFactorEnabled?: boolean;
  userName?: null | string;
}
