import { Component, Input } from '@angular/core';
import { Job } from '../../models/job-model';
import { JobsService } from '../../../../core/services/jobs-service';

@Component({
  selector: 'app-jobs-item',
  imports: [],
  templateUrl: './jobs-item.html',
  styleUrl: './jobs-item.scss',
})
export class JobsItem {
  @Input() job!: Job;
  expanded = false;

  constructor(private jobsService: JobsService) {}

  jobDetails() {
    this.expanded = !this.expanded;
  }

  applyJob() {
    this.jobsService.applyJob(this.job);
  }

  cancelApplication() {
    this.jobsService.cancelApplication(this.job);
  }
}
