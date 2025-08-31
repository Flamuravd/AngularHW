import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  imports: [],
  templateUrl: './company-details.html',
  styleUrl: './company-details.scss',
})
export class CompanyDetails implements OnInit {
  private jobsService = inject(JobsService);
  private route = inject(ActivatedRoute);

  selectedCompany = this.jobsService.selectedCompany;

  ngOnInit(): void {
    console.log(this.route.snapshot);

    const companyId: string = this.route.snapshot.params['id'];

    this.jobsService.getCompanyById(companyId);
  }
}
