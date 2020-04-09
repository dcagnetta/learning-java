import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StartSession } from '@ng-websocket-app/session/domain';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkStatus } from '@ng-websocket-app/theme/core';

@Component({
  selector: 'session-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Output()
  created = new EventEmitter<StartSession>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]]
    });
  }

  updateSession(){
    this.created.emit({
      type : 'New',
      session : this.name
    })
  }

  /*
  * Form Helpers
  * */
  private get name() {
    return this.form.get('name').value
  }

  checkStatus( name: string) {
      return checkStatus(name, this.form)
  }

}
