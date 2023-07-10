import { Component, OnInit } from '@angular/core';
import { OpportunitiesService } from 'src/app/services/opportunities.service';
import { Opportunity } from 'src/types/opportunity';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss'],
})
export class OpportunitiesComponent implements OnInit {
  opportunities: Opportunity[] = [];
  page = 0;
  pageSize = 10;
  count = 0;

  constructor(private opportunitiesService: OpportunitiesService) {}

  ngOnInit(): void {
    this.getOpportunities();
  }

  async getOpportunities(page: number = 0, limit: number = 5) {
    const result = await this.opportunitiesService.getOpportunities(
      page,
      limit
    );
    this.opportunities = result.opportunities;
    this.count = result.count;
  }

  async onPageChange(event: any) {
    await this.getOpportunities(event.pageIndex, event.pageSize);
  }
}
