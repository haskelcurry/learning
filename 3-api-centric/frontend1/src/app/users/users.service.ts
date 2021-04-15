import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsersBackendService } from '@api/services';
import { UserDTO } from '@api/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private backend: UsersBackendService) {}

  getUserData({ id }): Observable<UserDTO> {
    return this.backend.getUserData({ id });
  }

  getUsers(): Observable<UserDTO[]> {
    return this.backend.getUsers();
  }
}
