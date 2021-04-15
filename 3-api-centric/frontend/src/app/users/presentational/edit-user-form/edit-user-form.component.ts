import { debounceTime, takeWhile } from 'rxjs/operators';
import {
  Component,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from '@app/api/models';

@Component({
  selector: 'edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserFormComponent implements OnDestroy {
  @Input()
  set user(user: UserDTO) {
    user && this.initFormGroup(user);
  }

  @Output() onChange = new EventEmitter<UserDTO>();

  formGroup: FormGroup;
  alive = true;

  constructor(private fb: FormBuilder) {}

  ngOnDestroy() {
    this.alive = false;
  }

  initFormGroup(user: UserDTO) {
    if (!this.formGroup) {
      this.formGroup = this.fb.group(user);
      this.formGroup.valueChanges
        .pipe(
          debounceTime(300),
          takeWhile(() => this.alive)
        )
        .subscribe(v => this.onChange.emit(v));
    } else {
      this.formGroup.patchValue(user, { emitEvent: false });
    }
  }
}
