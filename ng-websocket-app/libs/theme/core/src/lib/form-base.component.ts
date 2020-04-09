import { NbComponentStatus } from '@nebular/theme';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

export abstract class FormComponent {
  public form: FormGroup;

  constructor(protected fb: FormBuilder) { }

  /*
  * Checks validity of control to determine status to be displayed
  *
  * Usage:
  *
  *    <input type="text" nbInput
  *             [status]="checkStatus('name')"
  *             formControlName="name">
  *
  * */
  /*public checkStatus( name: string ): null | NbComponentStatus {
    const control = this.form.get(name) as FormGroup;

    if ( !control.pristine ) {
      return control.valid ? 'success' : 'danger' ;
    }
    // Don't set anything if we haven't touched it or its valid initially
    return control.pristine || control.valid ? null : 'danger' ;
  }*/

  /*
 * Form Helpers
 * */
  public formControl( name: string): AbstractControl | null {
    return this.form.get(name);
  }
}
