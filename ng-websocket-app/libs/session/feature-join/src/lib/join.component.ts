import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StartSession } from '@ng-websocket-app/session/domain';
import { FormComponent } from '@ng-websocket-app/theme/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component( {
  selector: 'session-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
} )
export class JoinComponent extends FormComponent implements OnInit {

  @Output()
  joined = new EventEmitter<StartSession>();

  constructor(fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      person: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    });
  }

  updateSession(){
    this.joined.emit({
      type : 'Join',
      name : this.formControl('code').value,
      person : this.formControl('person').value
    })
  }

}

