import { Controller, Get, Param } from '@nestjs/common';

const users = [{
  id: 1,
  name: {
    firstName: 'John', lastName: 'Smith'
  },
  photo: 'https://image.flaticon.com/icons/svg/194/194919.svg',
  address: 'Madisen Shores',
  address2: '33667 Ebert Ranch',
  city: 'Bradtkestad',
  state: 'Utah',
  zip: '65613-6274'
}, {
  id: 2,
  name: {
    firstName: 'Jane', lastName: 'Doe'
  },
  photo: 'https://image.flaticon.com/icons/svg/194/194915.svg',
  address: 'Madisen Shores',
  address2: '33667 Ebert Ranch',
  city: 'South Park',
  state: 'Colorado',
  zip: '65613-6275'
}];

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return users[id - 1];
  }
}
