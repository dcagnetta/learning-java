import { NbComponentStatus } from '@nebular/theme';
import { FormGroup } from '@angular/forms';

export function checkStatus( name: string, form: FormGroup ): null | NbComponentStatus {
  const control = form.get(name) as FormGroup;

  if ( !control.pristine ) {
    return control.valid ? 'success' : 'danger' ;
  }
  // Don't set anything if we haven't touched it or its valid initially
  return control.pristine || control.valid ? null : 'danger' ;
}
