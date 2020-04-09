import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrJoinContainer } from './start-container.component';

describe('CreateOrJoinComponent', () => {
  let component: CreateOrJoinContainer;
  let fixture: ComponentFixture<CreateOrJoinContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrJoinContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrJoinContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
