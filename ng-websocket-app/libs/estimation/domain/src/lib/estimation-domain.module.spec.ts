import { async, TestBed } from '@angular/core/testing';
import { EstimationDomainModule } from './estimation-domain.module';

describe('EstimationDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EstimationDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EstimationDomainModule).toBeDefined();
  });
});
