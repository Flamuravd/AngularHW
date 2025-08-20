import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJobPanel } from './info-job-panel';

describe('InfoJobPanel', () => {
  let component: InfoJobPanel;
  let fixture: ComponentFixture<InfoJobPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoJobPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoJobPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
