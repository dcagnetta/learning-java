import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
      <div class="row">
          <div class="col-md-12">
              <nb-card class="inline-form-card">
                  <nb-card-header>Inline form</nb-card-header>
                  <nb-card-body>
                      <form class="form-inline">
                          <input type="text" nbInput fullWidth placeholder="Jane Doe">
                          <input type="email" nbInput fullWidth placeholder="Email">
                          <button type="submit" nbButton status="primary">Submit</button>
                      </form>
                  </nb-card-body>
              </nb-card>
          </div>
      </div>
  `,
  styleUrls: ['test.component.scss']
})
export class TestComponent {

}
