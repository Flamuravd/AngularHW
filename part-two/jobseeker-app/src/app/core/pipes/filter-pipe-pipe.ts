import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/models/job-model';

@Pipe({
  name: 'filterJobs',
})
export class FilterPipePipe implements PipeTransform {
  transform(jobs: Job[], searchText: string): Job[] {
    if (!jobs || !searchText) return jobs;
    searchText = searchText.toLowerCase();

    return jobs.filter(
      (job) =>
        job.company.toLowerCase().includes(searchText) ||
        job.position.toLowerCase().includes(searchText) ||
        job.location.toLowerCase().includes(searchText)
    );
  }
}
