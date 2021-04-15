import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatPageModule } from './chat-page/chat-page.module';
import { ChatState } from './chat.state';
import { routes } from './chat.routes';

@NgModule({
  imports: [ChatPageModule, RouterModule.forChild(routes)]
})
export class ChatModule {
  constructor() {
    console.info(`%c ✔ Chat module is loaded`, 'color: chartreuse');
  }
}
