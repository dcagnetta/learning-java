import { async, TestBed } from '@angular/core/testing';
import { EstimationFeatureMakeEstimationModule } from './estimation-feature-make-estimation.module';

describe('EstimationFeatureMakeEstimationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EstimationFeatureMakeEstimationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EstimationFeatureMakeEstimationModule).toBeDefined();
  });
});
