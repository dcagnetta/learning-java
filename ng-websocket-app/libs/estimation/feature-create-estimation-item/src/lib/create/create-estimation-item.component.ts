import { Component, OnDestroy, OnInit } from '@angular/core';
import { EstimationItem, EstimationItemFacade } from '@ng-websocket-app/estimation/domain';
import { Subject } from 'rxjs';
import { FormComponent } from '@ng-websocket-app/theme/core';
import { FormBuilder, Validators } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'estimation-create-estimation-item',
  templateUrl: './create-estimation-item.component.html',
  styleUrls: ['./create-estimation-item.component.scss']
})
export class CreateEstimationItemComponent extends FormComponent  implements OnInit, OnDestroy {

  constructor(
    fb: FormBuilder,
    private facade: EstimationItemFacade,
    private router: Router,
    private route: ActivatedRoute) {
    super(fb);
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description : [null, [Validators.maxLength(50)]]
    });

    /**
     *
     * This was resulting in multiple subscriptions when we navigated back
     *
     * */
    // Triggers the stream
  /*  this.facade.create$
      .pipe( untilDestroyed( this ) )
      .subscribe();*/
  }

  onSubmit() {
    this.facade.create(this.form.value);
    return this.router.navigate(['../'], { relativeTo: this.route });
  }

  // This method must be present, even if empty.
  ngOnDestroy() {
    // We'll throw an error if it doesn't
    console.log('CreateEstimationItemComponent Destroyed');
  }

}

