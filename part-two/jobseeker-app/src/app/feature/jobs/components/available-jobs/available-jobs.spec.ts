import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableJobs } from './available-jobs';

describe('AvailableJobs', () => {
  let component: AvailableJobs;
  let fixture: ComponentFixture<AvailableJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableJobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
