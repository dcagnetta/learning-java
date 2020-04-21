import { async, TestBed } from '@angular/core/testing';
import { EstimationShellMakeEstimationsModule } from './estimation-shell-make-estimations.module';

describe('EstimationShellMakeEstimationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EstimationShellMakeEstimationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EstimationShellMakeEstimationsModule).toBeDefined();
  });
});
