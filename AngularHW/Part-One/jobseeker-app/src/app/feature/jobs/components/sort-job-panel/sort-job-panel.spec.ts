import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortJobPanel } from './sort-job-panel';

describe('SortJobPanel', () => {
  let component: SortJobPanel;
  let fixture: ComponentFixture<SortJobPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortJobPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortJobPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
