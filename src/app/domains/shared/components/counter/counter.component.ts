import { Component, Input, SimpleChange } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // NO ASYNC
    // Antes del render
    console.log('Cosntructor');
    console.log('-', repeat(10));
  }

  ngOnChanges(changes: SimpleChange) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-', repeat(10));
    console.log(changes);
  }
}
