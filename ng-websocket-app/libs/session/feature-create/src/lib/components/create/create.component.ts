import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StartSession } from '@ng-websocket-app/session/domain';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent } from '@ng-websocket-app/theme/core';

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
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  updateSession(){
    this.created.emit({
      type : 'New',
      name : this.formControl('name').value
    })
  }
}
