import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StartSession } from '@ng-websocket-app/session/domain';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '@ng-websocket-app/theme/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'session-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends FormComponent implements OnInit {

  @Output()
  created = new EventEmitter<StartSession>();

  constructor(fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]]
    });
  }

  updateSession(){
    this.created.emit({
      type : 'New',
      session : this.formControl('name').value
    })
  }

  public checkStatus( name: string ): null | NbComponentStatus {
    const control = this.form.get(name) as FormGroup;

    if ( !control.pristine ) {
      return control.valid ? 'success' : 'danger' ;
    }
    // Don't set anything if we haven't touched it or its valid initially
    return control.pristine || control.valid ? 'basic' : 'danger' ;
  }
}
