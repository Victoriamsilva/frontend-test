import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('input') input: ElementRef = new ElementRef('');

  constructor() {}

  ngOnInit(): void {}
  searchValue: string = '';

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        tap(() => {
          this.searchEvent.emit(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }
}
