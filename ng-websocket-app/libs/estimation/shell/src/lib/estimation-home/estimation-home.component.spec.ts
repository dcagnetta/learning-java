import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationHomeComponent } from './estimation-home.component';

describe('EstimationHomeComponent', () => {
  let component: EstimationHomeComponent;
  let fixture: ComponentFixture<EstimationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
