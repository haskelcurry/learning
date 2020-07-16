// 1. Keep components thin
// 2. Keep components pure
// 3. Mind the single responsibility



export type User = {
  id: string;
  name: string;
};

@Component({})
export class UserDashboardComponent {
  users;
  showPreloader = false;

  constructor(private http: HttpClient) {}

  getUsers() {
    this.showPreloader = true;
    this.http.get('/users').subscribe(result => {
      this.users = result.map(u => ({id: u.id, name: u.name}));
      this.showPreloader = false;
    })
  }

  saveUser(user: User) {
    this.showPreloader = true;
    this.http.post('/users', {body: user})
      .subscribe(() => {
        this.showPreloader = false;
      })
  }
}



// @Injectable()
// export class UserService {
//   constructor(private http: HttpClient) {}

//   getUsers() {
//     return this.http.get('/users')
//       .pipe(
//         mergeAll(),
//         map(this.toUserVm)
//       );
//   }

//   saveUser(user: User) {
//     return this.http.post('/users', {body: user});
//   }

//   toUserVm(user) {
//     return pluck(['id', 'name'], user);
//   }
// }
