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

  constructor(private opportunitiesService: OpportunitiesService) {}

  ngOnInit(): void {
    this.getOpportunities();
  }

  async getOpportunities() {
    const result = await this.opportunitiesService.getOpportunities(0, 10);
    this.opportunities = result.opportunities;
  }
}
