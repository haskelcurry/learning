import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NameInputComponent } from './name-input.component';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  declarations: [NameInputComponent],
  exports: [NameInputComponent]
})
export class NameInputModule {}
