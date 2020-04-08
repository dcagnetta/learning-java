import { async, TestBed } from '@angular/core/testing';
import { ThemeCoreModule } from './theme-core.module';

describe('ThemeCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemeCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ThemeCoreModule).toBeDefined();
  });
});
