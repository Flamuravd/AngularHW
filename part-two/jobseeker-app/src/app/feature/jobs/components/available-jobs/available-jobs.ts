import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { JobsItem } from '../jobs-item/jobs-item';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../../../core/pipes/filter-pipe-pipe';

@Component({
  selector: 'app-available-jobs',
  imports: [JobsItem, FormsModule, FilterPipePipe],
  templateUrl: './available-jobs.html',
  styleUrl: './available-jobs.scss',
})
export class AvailableJobs {
  jobsService = inject(JobsService);
  searchText = '';
}
