import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';

@Component({
  selector: 'app-info-job-panel',
  imports: [],
  templateUrl: './info-job-panel.html',
  styleUrl: './info-job-panel.scss',
})
export class InfoJobPanel {
  jobsService = inject(JobsService);
}
