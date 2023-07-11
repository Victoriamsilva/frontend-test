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

  public async getOpportunities(search?: string) {
    if (search) {
      this.page = 0;
    }
    try {
      const result = await this.opportunitiesService.getOpportunities({
        page: this.page,
        limit: this.pageSize,
        search,
      });
      this.opportunities = result.opportunities;
      this.count = result.count;
    } catch (error) {}
  }

  async onPageChange(event: any) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    await this.getOpportunities();
  }
}
