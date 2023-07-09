import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities.component';


@NgModule({
  declarations: [
    OpportunitiesComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule
  ]
})
export class OpportunitiesModule { }
