import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WORKSPACE_SHARED_ASSETS_FOLDERS } from './workspace/shared/workspace-shared-assets-folders.config';
import { Observable } from 'rxjs';
import { pluck, omit } from 'lodash';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { SHARED_ASSETS_FOLDERS } from '@lib/shared/common/assets-folders.config';
import { NotificationModule } from '@lib/commons';
import { AutoLogoutModule } from '@lib/workspace/shared/autologout/auto-logout.module';
import { G3IconModule } from '@lib/shared/g3-icon/g3-icon.module';
import { multiTranslateLoaderFactory } from '@lib/shared/translate/multi-translate-loader-factory';
import { PUBLIC_ASSETS_FOLDERS } from '@lib/shared/common/assets-folders.config';
import { HttpAuthenticationInterceptor } from '@lib/shared/auth/http-authentication.interceptor';
import { AppInitService } from '@lib/app-init.service';
import { ApiModule } from '@api/api.module';
import { AppRoutingModule } from './app.routing.module';
import { WorkspaceModule } from './workspace/shared/shell/workspace.module';
import { NotificationRendererService } from './shared/common';
import { environment } from '@env/environment';
import { HttpCacheModule } from './shared/http-cache/http-cache.module';
import { AuthModule, JwtService } from './shared/auth';
import { BackendErrorModule } from './shared/backend-error/backend-error.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { AppComponent } from './app.component';

...
