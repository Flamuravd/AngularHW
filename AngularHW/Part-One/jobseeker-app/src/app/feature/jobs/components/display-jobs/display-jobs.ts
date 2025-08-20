import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { JobsItem } from '../jobs-item/jobs-item';

@Component({
  selector: 'app-display-jobs',
  imports: [JobsItem],
  templateUrl: './display-jobs.html',
  styleUrl: './display-jobs.scss',
})
export class DisplayJobs {
  jobsService = inject(JobsService);
}
