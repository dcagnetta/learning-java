import { async, TestBed } from '@angular/core/testing';
import { EstimationFeatureCreateEstimationItemModule } from './estimation-feature-create-estimation-item.module';

describe('EstimationFeatureCreateEstimationItemModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EstimationFeatureCreateEstimationItemModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EstimationFeatureCreateEstimationItemModule).toBeDefined();
  });
});
