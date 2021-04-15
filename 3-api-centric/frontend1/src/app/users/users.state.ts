import { Injectable } from '@angular/core';
import { State } from '@app/shared/state-management';
import { UserDTO } from '@api/models';

export interface UsersStateInterface {
  creating: UserDTO;
}

export const initialState = {
  creating: {
    id: null,
    name: { firstName: '', lastName: '' },
    address: '',
    address2: '',
    city: '',
    photo: '',
    state: '',
    zip: ''
  }
};

@Injectable({
  providedIn: 'root'
})
export class UsersState extends State<UsersStateInterface> {
  constructor() {
    super(initialState, { rehydrate: true });
  }
}
