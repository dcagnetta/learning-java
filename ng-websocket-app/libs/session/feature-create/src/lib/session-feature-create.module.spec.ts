import { async, TestBed } from '@angular/core/testing';
import { SessionFeatureCreateModule } from './session-feature-create.module';

describe('SessionFeatureCreateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SessionFeatureCreateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SessionFeatureCreateModule).toBeDefined();
  });
});
