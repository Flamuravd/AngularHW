import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJobs } from './display-jobs';

describe('DisplayJobs', () => {
  let component: DisplayJobs;
  let fixture: ComponentFixture<DisplayJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayJobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
