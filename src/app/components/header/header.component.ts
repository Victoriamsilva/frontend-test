import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { OpportunitiesComponent } from 'src/app/modules/opportunities/opportunities.component';
import { OpportunitiesService } from 'src/app/services/opportunities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('input') input: ElementRef = new ElementRef('');

  constructor(private opportunitiesService: OpportunitiesService) {}

  ngOnInit(): void {}

  opportunitiesComponent = new OpportunitiesComponent(
    this.opportunitiesService
  );

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        tap(() => {
          this.opportunitiesComponent.getOpportunities(
            this.input.nativeElement.value
          );
        })
      )
      .subscribe();
  }
}
