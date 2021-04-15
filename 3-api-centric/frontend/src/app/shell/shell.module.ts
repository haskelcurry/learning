import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '@app/shared/shared.module';
import { ShellPageComponent } from './shell-page/shell-page.component';
import { routes } from './shell.routes';

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShellPageComponent],
  exports: [ShellPageComponent]
})
export class ShellModule {
  constructor() {
    console.info(`%c ✔ Shell is loaded`, 'color: chartreuse');
  }
}
