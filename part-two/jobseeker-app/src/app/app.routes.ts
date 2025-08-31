import { Routes } from '@angular/router';
import { Home } from './feature/home/home/home';
import { NotFound } from './core/components/not-found/not-found';
import { DisplayJobs } from './feature/jobs/components/display-jobs/display-jobs';
import { DisplayProfile } from './feature/profile/components/display-profile/display-profile';
import { CompanyDetails } from './feature/jobs/components/company-details/company-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'jobs',
    component: DisplayJobs,
  },
  {
    path: 'company/:id',
    component: CompanyDetails,
  },
  {
    path: 'profile',
    component: DisplayProfile,
  },
  {
    path: '**',
    component: NotFound,
  },
];
