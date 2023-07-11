import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpportunitiesService } from 'src/app/services/opportunities.service';
import { Opportunity } from 'src/types/opportunity';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

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
  date = '';

  constructor(
    private opportunitiesService: OpportunitiesService,
    public dialog: MatDialog,
    public paginator: MatPaginatorIntl,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.paginator.itemsPerPageLabel = 'Itens por página';
    this.paginator.nextPageLabel = 'Próxima página';
    this.paginator.previousPageLabel = 'Página anterior';
    this.getOpportunities();
  }

  openDialog(opportunity: Opportunity): void {
    this.dialog.open(ProductsModalComponent, {
      minWidth: '50%',
      minHeight: '50%',
      data: opportunity,
    });
  }

  async getOpportunities(search?: string) {
    console.log(this.date);
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
        date: this.date,
      });
      this.opportunities = result.opportunities;
      this.count = result.count;
    } catch (error) {
      this.toastr.error('Erro ao buscar oportunidades');
    } finally {
      this.isLoading = false;
    }
  }

  async onPageChange(event: any) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    await this.getOpportunities(this.searchText);
  }
}
