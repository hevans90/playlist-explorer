import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild('input', { static: true }) inputElRef: ElementRef;

  @Output() filtered = new EventEmitter<string>();

  ngOnInit() {
    fromEvent(this.inputElRef.nativeElement, 'keyup')
      .pipe(
        debounceTime(100),
        map(
          (keyboardEvent: Event) =>
            (keyboardEvent.target as HTMLInputElement).value
        ),
        tap(filterString => this.filtered.emit(filterString))
      )
      .subscribe();
  }
}
