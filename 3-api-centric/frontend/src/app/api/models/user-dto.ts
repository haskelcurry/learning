/* tslint:disable */
/* eslint-disable */
import { UserNameDTO } from './user-name-dto';

/**
 * User
 */
export interface UserDTO {
  address?: string;
  address2?: string;
  city?: string;
  id?: number;
  name?: UserNameDTO;
  photo?: string;
  state?: string;
  zip?: string;
}
