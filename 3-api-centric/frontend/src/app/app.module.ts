import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from '@environment';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from './shared/shared.module';
import { ApiModule } from './api/api.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApiModule.forRoot({
      rootUrl: environment.apiUrl
    }),
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ShellModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
