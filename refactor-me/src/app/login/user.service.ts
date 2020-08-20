import { Injectable } from '@angular/core';
import { UserDTO } from './user.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _loggedUser: UserDTO;

  set loggedUser(user: UserDTO) {
    console.info('User was successfully logged: ', user);
    console.info('%------------------------------%');
    this._loggedUser = user;
  }

  get loggedUser() {
    return this._loggedUser;
  }

  constructor(private http: HttpClient) {}
}
