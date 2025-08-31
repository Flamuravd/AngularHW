import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';

@Component({
  selector: 'app-sort-panel',
  imports: [],
  templateUrl: './sort-panel.html',
  styleUrl: './sort-panel.scss',
})
export class SortPanel {
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
