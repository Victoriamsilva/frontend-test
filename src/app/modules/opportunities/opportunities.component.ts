import { Component, OnInit } from '@angular/core';
import { OpportunitiesService } from 'src/app/services/opportunities.service';
import { Opportunity } from 'src/types/opportunity';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss'],
})
export class OpportunitiesComponent implements OnInit {
  opportunities: Opportunity[] | null = null;
  page = 0;
  pageSize = 10;
  count = 0;
  isLoading = false;
  searchText: string = '';

  constructor(private opportunitiesService: OpportunitiesService) {}

  ngOnInit(): void {
    this.getOpportunities();
  }

  async getOpportunities(search?: string) {
    this.isLoading = true;
    if (search) {
      this.page = 0;
      this.searchText = search;
    }
    try {
      const result = await this.opportunitiesService.getOpportunities({
        page: this.page,
        limit: this.pageSize,
        search,
      });
      this.opportunities = result.opportunities;
      this.count = result.count;
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  }

  async onPageChange(event: any) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    await this.getOpportunities();
  }
}
