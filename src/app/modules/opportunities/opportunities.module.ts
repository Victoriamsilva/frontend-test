import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [OpportunitiesComponent],
  imports: [CommonModule, OpportunitiesRoutingModule, MatPaginatorModule],
})
export class OpportunitiesModule {}
