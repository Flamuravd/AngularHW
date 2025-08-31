import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { JobsItem } from '../jobs-item/jobs-item';

@Component({
  selector: 'app-applied-jobs',
  imports: [JobsItem],
  templateUrl: './applied-jobs.html',
  styleUrl: './applied-jobs.scss',
})
export class AppliedJobs {
  jobsService = inject(JobsService);
}
