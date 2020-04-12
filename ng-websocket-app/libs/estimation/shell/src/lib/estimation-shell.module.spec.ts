import { async, TestBed } from '@angular/core/testing';
import { EstimationShellModule } from './estimation-shell.module';

describe('EstimationShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EstimationShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EstimationShellModule).toBeDefined();
  });
});
