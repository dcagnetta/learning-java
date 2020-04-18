import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'session-reset',
  templateUrl: './session-reset.component.html'
})
export class SessionResetComponent {

  @Output()
  resetClicked = new EventEmitter();


  onResetClicked() {
    this.resetClicked.emit();
  }

}
