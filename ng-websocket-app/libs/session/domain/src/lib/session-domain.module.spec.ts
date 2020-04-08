import { async, TestBed } from '@angular/core/testing';
import { SessionDomainModule } from './session-domain.module';

describe('SessionDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SessionDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SessionDomainModule).toBeDefined();
  });
});
