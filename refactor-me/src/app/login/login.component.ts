import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
  selector: 'my-login',
  template: `
    <h3>Login</h3>
    <mat-form-field appearance="outline">
      <mat-label>Username</mat-label>
      <input matInput placeholder="Username" #username>
    </mat-form-field>
    <mat-form-field appearance="outline">
      <mat-label>Password</mat-label>
      <input matInput placeholder="Password" #password>
      <mat-icon matSuffix>password</mat-icon>
    </mat-form-field>
    <button mat-button mat-raised-button (click)="onClick(username.value, password.value)">Login</button>
  `,
  styles: [`
    .mat-form-field {
      margin-right: 24px;
    }
    button {
      height: 50px;
      top: -5px;
    }
  `]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient , private router: Router, private userSerivce: UserService) {}

  ngOnInit(): void {}

  // eve.holt@reqres.in
  onClick(email, password) {
    this.http.post('https://reqres.in/api/login', {email: email, password: password})
            .subscribe((result: any) => {
               if (result.token) {
                 this.http.get("https://reqres.in/api/users/2").subscribe((result2: any) => {
                   if (result2.data.email.indexOf('@reqres.in') > -1) {
                     // Login only if it's a company user
                    const user: any = {};
                    user.name = result2.data.first_name;
                    user.surname = result2.data.last_name;

                    this.userSerivce.loggedUser = user;
                      this.router.navigate(['/']);
                   } else {
                     console.error('User is from different company. The email should be in "reqres.in" domain!')
                   }
                 });
               }
            });
  }
}
