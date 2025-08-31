import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsItem } from './jobs-item';

describe('JobsItem', () => {
  let component: JobsItem;
  let fixture: ComponentFixture<JobsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
