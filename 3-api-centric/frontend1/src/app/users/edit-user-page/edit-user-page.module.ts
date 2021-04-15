import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@app/shared/shared.module';
import { EditUserPageComponent } from './edit-user-page.component';
import { EditUserFormModule } from '../presentational/edit-user-form/edit-user-form.module';

@NgModule({
  imports: [SharedModule, MatButtonModule, EditUserFormModule],
  declarations: [EditUserPageComponent]
})
export class EditUserPageModule {}
