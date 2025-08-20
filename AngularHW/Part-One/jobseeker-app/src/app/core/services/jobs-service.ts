import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/job-model';
import { jobsMock } from '../../feature/jobs/jobs-mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobsMock);

  jobsOnTotal = computed(() => this.jobs().length);
  appliedJobs = computed(() => this.jobs().filter((jb) => jb.isApplied));
  availableJobs = computed(() => this.jobs().filter((jb) => !jb.isApplied));

  applyJob(job: Job) {
    this.jobs.update((list) =>
      list.map((jb) => (jb === job ? { ...jb, isApplied: true } : jb))
    );
  }

  cancelApplication(job: Job) {
    this.jobs.update((list) =>
      list.map((jb) => (jb === job ? { ...jb, isApplied: false } : jb))
    );
  }
}
