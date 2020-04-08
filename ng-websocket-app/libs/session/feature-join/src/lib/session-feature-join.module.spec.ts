import { async, TestBed } from '@angular/core/testing';
import { SessionFeatureJoinModule } from './session-feature-join.module';

describe('SessionFeatureJoinModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SessionFeatureJoinModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SessionFeatureJoinModule).toBeDefined();
  });
});
