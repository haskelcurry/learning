import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '@app/shared/shared.module';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent]
})
export class ChatModule {}
