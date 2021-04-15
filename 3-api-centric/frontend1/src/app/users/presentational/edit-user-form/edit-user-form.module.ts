import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@app/shared/shared.module';
import { NameInputModule } from '../name-input/name-input.module';
import { EditUserFormComponent } from './edit-user-form.component';

@NgModule({
  imports: [
    SharedModule, 
    ReactiveFormsModule,
    MatInputModule, 
    NameInputModule
  ],
  declarations: [EditUserFormComponent],
  exports: [EditUserFormComponent]
})
export class EditUserFormModule {}
