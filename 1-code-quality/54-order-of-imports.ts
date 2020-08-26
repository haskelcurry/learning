import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
/* ------- !Angular 2 native components  ---------*/
import { SomeComponent } from 'some-module';
import { SomeOtherComponent } from 'some-other-module';
/* ------- !App components  ---------*/
import { SomeService } from 'some-module';
import { SomeOtherService } from 'some-other-module';
import { AnotherService } from 'another-module';
/* ------- !Services  ---------*/
/* ------- !Model  ---------*/

/* Like this:
1. 3rd-party modules (lowest level)
2. Angular-related modules
3. Modules from locally built libraries
4. Modules from other folders, sorted by distance (../../...)
5. Modules from current folder (./...)
*/
