import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OpportunitiesComponent,
    HeaderComponent,
    LoadingComponent,
    ProductsModalComponent,
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
  ],
})
export class OpportunitiesModule {}
