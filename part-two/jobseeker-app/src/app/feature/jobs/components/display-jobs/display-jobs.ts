import { Component, Input } from '@angular/core';
import { AvailableJobs } from '../available-jobs/available-jobs';
import { AppliedJobs } from '../applied-jobs/applied-jobs';
import { SortPanel } from '../sort-panel/sort-panel';
import { CompanyDetails } from '../company-details/company-details';

@Component({
  selector: 'app-display-jobs',
  imports: [AvailableJobs, AppliedJobs, SortPanel],
  templateUrl: './display-jobs.html',
  styleUrl: './display-jobs.scss',
})
export class DisplayJobs {}
