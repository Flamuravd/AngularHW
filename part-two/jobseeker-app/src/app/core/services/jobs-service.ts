import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/models/job-model';
import { jobsMock } from '../../feature/jobs-mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobsMock);

  selectedCompany = signal<Job | null>(null);

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

  getCompanyById(id: string) {
    const company = this.jobs().find((job) => job.id.toString() === id);

    if (company) {
      this.selectedCompany.set(company);
    }
  }
}
