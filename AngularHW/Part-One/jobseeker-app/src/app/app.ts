import { Component } from '@angular/core';
import { Header } from './core/components/header/header';
import { DisplayJobs } from './feature/jobs/components/display-jobs/display-jobs';
import { InfoJobPanel } from './feature/jobs/components/info-job-panel/info-job-panel';
import { AppliedJobs } from './feature/jobs/components/applied-jobs/applied-jobs';
import { SortJobPanel } from './feature/jobs/components/sort-job-panel/sort-job-panel';

@Component({
  selector: 'app-root',
  imports: [Header, DisplayJobs, InfoJobPanel, AppliedJobs, SortJobPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
