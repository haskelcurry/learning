import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from '@app/shared/shared.module';
import { ChatModule } from '../presentational/chat/chat.module';
import { ChatPageComponent } from './chat-page.component';

@NgModule({
  imports: [SharedModule, MatTabsModule, ChatModule],
  declarations: [ChatPageComponent]
})
export class ChatPageModule {}
