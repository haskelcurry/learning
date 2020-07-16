// app.html
<user-dashboard
  [users]="users"
  [userItemConfig]="userItemConfigFn"
  (onClick)="onColumnClick($event)"
>
<user-dashboard>


// user-dashboard.html
<dashboard-header/>
<user-item
  *ngFor="let user of users"
  [user]="user"
  [userItemConfig]="userItemConfig"
  (onClick)="onColumnClick.emit($event)"
>
</user-item>
<dashboard-footer/>


// user-item.html
<h1>{{ user.name }}</h1>
<div
  *ngFor="let col from userItemConfig.cols"
  class="column"
  (click)="onColumnClick.emit(col)"
>
  ...
</div>








// <user-dashboard>
//   <user-item
//     *ngFor="let user of users"
//     [user]="user"
//   >
//     <div
//       *ngFor="let col from userItemConfig.cols"
//       class="column"
//       (click)="onColumnClick(col)"
//     >
//       ...
//     </div>
//   </user-item>
// <user-dashboard>
