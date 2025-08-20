import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';

@Component({
  selector: 'app-sort-job-panel',
  imports: [],
  templateUrl: './sort-job-panel.html',
  styleUrl: './sort-job-panel.scss',
})
export class SortJobPanel {
  jobsService = inject(JobsService);

  sortBySalary() {
    this.jobsService.jobs.update((jobs) =>
      jobs.slice().sort((a, b) => a.startingSalary - b.startingSalary)
    );
  }

  sortByWorkType() {
    const order = ['remote', 'onsite', 'hybrid'];
    this.jobsService.jobs.update((jobs) =>
      jobs
        .slice()
        .sort((a, b) => order.indexOf(a.workType) - order.indexOf(b.workType))
    );
  }
}
